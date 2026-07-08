(function () {
  var PAGE_LABELS = {
    "drinks": "Drinks & Wine",
    "foods": "Food & Pizza",
    "snacks": "Snacks & Cicchetti",
    "coffee-croissants": "Coffee & Croissants",
  };

  var loginView = document.getElementById("login-view");
  var editorView = document.getElementById("editor-view");
  var passwordInput = document.getElementById("password-input");
  var loginBtn = document.getElementById("login-btn");
  var loginError = document.getElementById("login-error");
  var nameInput = document.getElementById("name-input");
  var nameError = document.getElementById("name-error");
  var itemsStatus = document.getElementById("items-status");
  var itemsRoot = document.getElementById("items-root");

  var token = sessionStorage.getItem("admin_token");
  // Name is remembered per-device in localStorage (not sessionStorage) so
  // staff don't have to retype it every time they open the page, with a
  // generic default pre-filled until someone changes it.
  nameInput.value = localStorage.getItem("admin_name") || "Staff";
  nameInput.addEventListener("input", function () {
    localStorage.setItem("admin_name", nameInput.value);
  });

  if (token) {
    showEditor();
  }

  loginBtn.addEventListener("click", login);
  passwordInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") login();
  });

  function login() {
    loginError.hidden = true;
    fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: passwordInput.value }),
    })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) throw new Error(data.error || "Login failed");
          return data;
        });
      })
      .then(function (data) {
        token = data.token;
        sessionStorage.setItem("admin_token", token);
        showEditor();
      })
      .catch(function (err) {
        loginError.textContent = err.message;
        loginError.hidden = false;
      });
  }

  function showEditor() {
    loginView.hidden = true;
    editorView.hidden = false;
    loadItems();
  }

  function getEditedBy() {
    var name = nameInput.value.trim();
    if (!name) {
      nameError.hidden = false;
      nameInput.focus();
      return null;
    }
    nameError.hidden = true;
    return name;
  }

  function loadItems() {
    var endpoint =
      window.SUPABASE_URL +
      "/rest/v1/menu_items?is_deleted=eq.false&order=page.asc,category.asc,sort_order.asc";

    fetch(endpoint, {
      headers: {
        apikey: window.SUPABASE_ANON_KEY,
        Authorization: "Bearer " + window.SUPABASE_ANON_KEY,
      },
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Could not load the menu (status " + res.status + ")");
        return res.json();
      })
      .then(renderItems)
      .catch(function (err) {
        itemsStatus.textContent = err.message;
      });
  }

  function renderItems(rows) {
    itemsStatus.hidden = true;
    itemsRoot.innerHTML = "";

    var byPage = {};
    rows.forEach(function (row) {
      byPage[row.page] = byPage[row.page] || {};
      byPage[row.page][row.category] = byPage[row.page][row.category] || {
        label: row.category_label,
        items: [],
      };
      byPage[row.page][row.category].items.push(row);
    });

    Object.keys(byPage).forEach(function (page) {
      var pageHeading = document.createElement("h2");
      pageHeading.className = "category-title";
      pageHeading.textContent = PAGE_LABELS[page] || page;
      itemsRoot.appendChild(pageHeading);

      var categories = byPage[page];
      Object.keys(categories).forEach(function (category) {
        itemsRoot.appendChild(
          buildCategorySection(page, category, categories[category].label, categories[category].items)
        );
      });
    });
  }

  function buildCategorySection(page, category, categoryLabel, items) {
    var section = document.createElement("section");
    section.className = "admin-category";

    var heading = document.createElement("h3");
    heading.className = "admin-category-title";
    heading.textContent = categoryLabel;
    section.appendChild(heading);

    items.forEach(function (item) {
      section.appendChild(buildItemRow(item));
    });

    section.appendChild(buildAddRow(page, category, categoryLabel));
    return section;
  }

  function buildItemRow(item) {
    var row = document.createElement("div");
    row.className = "admin-item-row";
    row.dataset.id = item.id;
    row.dataset.currentPrice = item.price;

    var nameField = document.createElement("input");
    nameField.className = "admin-input";
    nameField.value = item.name;

    var priceField = document.createElement("input");
    priceField.className = "admin-input admin-input-price";
    priceField.value = item.price;

    var status = document.createElement("span");
    status.className = "admin-row-status";

    var saveBtn = document.createElement("button");
    saveBtn.className = "admin-btn admin-btn-save";
    saveBtn.textContent = "Save";
    saveBtn.addEventListener("click", function () {
      var editedBy = getEditedBy();
      if (!editedBy) return;

      mutate({
        action: "update",
        id: item.id,
        name: nameField.value.trim(),
        price: priceField.value.trim(),
        oldPrice: row.dataset.currentPrice,
        editedBy: editedBy,
      })
        .then(function () {
          row.dataset.currentPrice = priceField.value.trim();
          flashStatus(status, "Saved", false);
        })
        .catch(function (err) {
          flashStatus(status, err.message, true);
        });
    });

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "admin-btn admin-btn-delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      var editedBy = getEditedBy();
      if (!editedBy) return;
      if (!confirm('Remove "' + nameField.value + '" from the menu?')) return;

      mutate({ action: "delete", id: item.id, editedBy: editedBy })
        .then(function () {
          row.remove();
        })
        .catch(function (err) {
          flashStatus(status, err.message, true);
        });
    });

    row.appendChild(nameField);
    row.appendChild(priceField);
    row.appendChild(saveBtn);
    row.appendChild(deleteBtn);
    row.appendChild(status);
    return row;
  }

  function buildAddRow(page, category, categoryLabel) {
    var row = document.createElement("div");
    row.className = "admin-add-row";

    var nameField = document.createElement("input");
    nameField.className = "admin-input";
    nameField.placeholder = "New item name";

    var priceField = document.createElement("input");
    priceField.className = "admin-input admin-input-price";
    priceField.placeholder = "€0.00";

    var status = document.createElement("span");
    status.className = "admin-row-status";

    var addBtn = document.createElement("button");
    addBtn.className = "admin-btn admin-btn-add";
    addBtn.textContent = "+ Add";
    addBtn.addEventListener("click", function () {
      var editedBy = getEditedBy();
      if (!editedBy) return;
      var name = nameField.value.trim();
      var price = priceField.value.trim();
      if (!name || !price) {
        flashStatus(status, "Name and price required", true);
        return;
      }

      mutate({
        action: "add",
        page: page,
        category: category,
        categoryLabel: categoryLabel,
        name: name,
        price: price,
        editedBy: editedBy,
      })
        .then(function () {
          nameField.value = "";
          priceField.value = "";
          flashStatus(status, "Added", false);
          loadItems();
        })
        .catch(function (err) {
          flashStatus(status, err.message, true);
        });
    });

    row.appendChild(nameField);
    row.appendChild(priceField);
    row.appendChild(addBtn);
    row.appendChild(status);
    return row;
  }

  function mutate(payload) {
    payload.token = token;
    return fetch("/api/admin-mutate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok) throw new Error(data.error || "Request failed");
        return data;
      });
    });
  }

  function flashStatus(el, text, isError) {
    el.textContent = text;
    el.className = "admin-row-status " + (isError ? "admin-row-status-error" : "admin-row-status-ok");
    setTimeout(function () {
      el.textContent = "";
    }, 2500);
  }
})();
