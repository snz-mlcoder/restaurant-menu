// Patches a category page with live prices/items from Supabase.
// If anything here fails (offline, misconfigured keys, etc.) it fails
// silently and the page just keeps showing whatever menu-render.js already
// built from menu-data.js -- that static content is always a safe fallback.
window.MenuLive = { apply: applyMenuLive };

function applyMenuLive(page, syncNames) {
  if (!page || !window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) return;

  var endpoint =
    window.SUPABASE_URL +
    "/rest/v1/menu_items?page=eq." +
    encodeURIComponent(page) +
    "&order=sort_order.asc";

  fetch(endpoint, {
    headers: {
      apikey: window.SUPABASE_ANON_KEY,
      Authorization: "Bearer " + window.SUPABASE_ANON_KEY,
    },
  })
    .then(function (res) {
      if (!res.ok) throw new Error("menu-live fetch failed: " + res.status);
      return res.json();
    })
    .then(function (rows) {
      rows.forEach(function (row) {
        applyRow(row, syncNames);
      });
    })
    .catch(function () {
      // Silent on purpose -- static fallback is already showing.
    });
}

function applyRow(row, syncNames) {
  var existing = document.querySelector('.menu-item[data-id="' + row.id + '"]');

  if (row.is_deleted) {
    if (existing) existing.style.display = "none";
    return;
  }

  if (existing) {
    var h3 = existing.querySelector("h3");
    var price = existing.querySelector(".price");
    if (syncNames && h3) h3.textContent = row.name;
    if (price) price.textContent = row.price;
    return;
  }

  if (row.is_custom) {
    var container = document.querySelector(
      '.menu-grid[data-category="' + row.category + '"]'
    );
    if (!container) return;
    container.appendChild(buildItemNode(row));
  }
}

function buildItemNode(row) {
  var item = document.createElement("div");
  item.className = "menu-item";
  item.setAttribute("data-id", row.id);

  var details = document.createElement("div");
  details.className = "item-details";

  var h3 = document.createElement("h3");
  h3.textContent = row.name;

  var price = document.createElement("span");
  price.className = "price";
  price.textContent = row.price;

  details.appendChild(h3);
  details.appendChild(price);
  item.appendChild(details);
  return item;
}

// Backward-compatible auto-invoke: still works if a page includes this
// script the old way (<script data-page="..." data-sync-names="...">).
// No page in this repo does that anymore -- menu-render.js calls
// window.MenuLive.apply() directly -- but this keeps the file a drop-in
// replacement rather than a breaking change.
(function () {
  var scriptTag = document.currentScript;
  var page = scriptTag && scriptTag.getAttribute("data-page");
  if (page) {
    applyMenuLive(page, scriptTag.getAttribute("data-sync-names") === "true");
  }
})();
