// Builds a category page (Coffee & Croissants / Drinks / Foods / Snacks)
// from window.MENU_DATA, then hands off to menu-live.js to overlay live
// Supabase prices/names. Invoked via:
//   <script src=".../menu-render.js" data-page="foods" data-lang="it"></script>
// Everything is built with createElement/textContent -- never innerHTML.
(function () {
  var scriptTag = document.currentScript;
  var page = scriptTag.getAttribute("data-page");
  var lang = scriptTag.getAttribute("data-lang");
  var data = window.MENU_DATA[page];
  var root = document.getElementById("menu-root");
  var up = window.relPrefix(scriptTag.getAttribute("src"));

  document.title = data.title[lang] + " - Bar Canton";
  document.documentElement.lang = lang;

  root.appendChild(buildNavBack(lang, page));
  root.appendChild(buildLanguageRow(lang, page));

  var h1 = document.createElement("h1");
  h1.className = "section-title";
  h1.textContent = data.title[lang];
  root.appendChild(h1);

  if (data.pageNote) {
    var note = document.createElement("p");
    note.className = "page-note";
    note.textContent = data.pageNote[lang];
    root.appendChild(note);
  }

  data.categories.forEach(function (cat) {
    root.appendChild(buildCategoryTitle(cat.title[lang]));

    if (cat.type === "grid") {
      root.appendChild(buildGrid(page, cat, lang));
      if (cat.footnote) root.appendChild(buildFootnote(cat.footnote[lang]));
    } else if (cat.type === "flat") {
      root.appendChild(buildFlat(cat, lang));
    } else if (cat.type === "subgroups") {
      cat.subgroups.forEach(function (sg) {
        var h3 = document.createElement("h3");
        h3.className = "sub-category-title";
        h3.textContent = sg.title[lang];
        root.appendChild(h3);
        root.appendChild(buildSubgroupGrid(sg, lang));
      });
    }
  });

  var syncNames = lang === "en";
  window.MenuLive.apply(page, syncNames);

  // ---- builders ----

  function buildNavBack(lang, page) {
    var div = document.createElement("div");
    div.className = "nav-back";
    var a = document.createElement("a");
    a.href = up + window.pickerHref(lang);
    a.textContent = window.NAV_BACK_LABEL[lang];
    div.appendChild(a);
    return div;
  }

  function buildLanguageRow(currentLang, page) {
    var div = document.createElement("div");
    div.className = "language-row";
    div.setAttribute("role", "group");
    div.setAttribute("aria-label", "Choose language");

    window.SITE_LANGS.forEach(function (l) {
      var label = l.flag + " " + l.label;
      var el;
      if (l.code === currentLang) {
        el = document.createElement("span");
        el.className = "lang-btn lang-btn-active";
        el.textContent = label;
      } else if (l.available) {
        el = document.createElement("a");
        el.className = "lang-btn";
        el.href = up + window.categoryHref(l.code, page);
        el.textContent = label;
      } else {
        el = document.createElement("span");
        el.className = "lang-btn lang-btn-disabled";
        el.title = "Coming soon";
        el.textContent = label;
      }
      div.appendChild(el);
    });

    return div;
  }

  function buildCategoryTitle(text) {
    var h2 = document.createElement("h2");
    h2.className = "category-title";
    h2.textContent = text;
    return h2;
  }

  function buildFootnote(text) {
    var p = document.createElement("p");
    p.className = "menu-footnote";
    p.textContent = text;
    return p;
  }

  // Staff (and the kitchen) think in Italian. If a customer on a translated
  // page points at an item, whoever is serving them needs to see the original
  // Italian name to know what's actually being ordered -- so every item shows
  // a small "🇮🇹 <italian name>" line whenever the current language's text
  // differs from the Italian text (skipped entirely on the Italian page
  // itself, and skipped when translation left the name unchanged, e.g. proper
  // nouns like "Capricciosa").
  function buildItalianHint(lang, itText, currentText) {
    if (lang === "it" || !itText || itText === currentText) return null;
    var p = document.createElement("p");
    p.className = "it-hint";
    p.textContent = "🇮🇹 " + itText;
    return p;
  }

  function buildGrid(page, cat, lang) {
    var grid = document.createElement("div");
    grid.className = "menu-grid";
    grid.setAttribute("data-page", page);
    grid.setAttribute("data-category", cat.id);
    cat.items.forEach(function (item) {
      grid.appendChild(buildItem(item, lang));
    });
    return grid;
  }

  function buildItem(item, lang) {
    var wrap = document.createElement("div");
    wrap.className = "menu-item" + (item.variant === "highlighted" ? " highlighted" : "");
    if (item.id) wrap.setAttribute("data-id", item.id);

    var details = document.createElement("div");
    details.className = "item-details";
    if (item.variant === "highlighted") details.style.gap = "10px";

    var h3 = document.createElement("h3");
    h3.textContent = item.name[lang];
    details.appendChild(h3);

    var itHint = buildItalianHint(lang, item.name.it, item.name[lang]);
    if (itHint) details.appendChild(itHint);

    if (item.sizes) {
      item.sizes.forEach(function (size) {
        var span = document.createElement("span");
        span.appendChild(document.createTextNode(size.label[lang] + ": "));
        var b = document.createElement("b");
        b.textContent = size.price;
        span.appendChild(b);
        details.appendChild(span);
      });
    } else {
      if (item.desc && item.desc[lang]) {
        var p = document.createElement("p");
        if (item.descVariant) p.className = item.descVariant;
        p.textContent = item.desc[lang];
        details.appendChild(p);
      }
      if (item.note && item.note[lang]) {
        var noteP = document.createElement("p");
        noteP.className = "options-list";
        noteP.textContent = item.note[lang];
        details.appendChild(noteP);
      }
      var price = document.createElement("span");
      price.className = "price";
      price.textContent = item.price;
      details.appendChild(price);
    }

    if (item.variant === "font-sub") wrap.className += " font-sub";

    wrap.appendChild(details);
    return wrap;
  }

  function buildFlat(cat, lang) {
    var wrap = document.createElement("div");
    wrap.className = "menu-grid-flat";

    var banner = document.createElement("div");
    banner.className = "base-price-tag";
    banner.textContent = cat.banner[lang];
    wrap.appendChild(banner);

    cat.flatItems.forEach(function (fi) {
      var row = document.createElement("div");
      row.className = "flat-item";
      if (fi.boldOnly) {
        var b = document.createElement("b");
        b.textContent = fi.text[lang];
        row.appendChild(b);
      } else {
        var label = document.createElement("b");
        label.textContent = fi.label[lang];
        row.appendChild(label);
        row.appendChild(document.createTextNode(" " + fi.text[lang]));
      }
      var flatHint = buildItalianHint(lang, fi.text.it, fi.text[lang]);
      if (flatHint) row.appendChild(flatHint);
      wrap.appendChild(row);
    });

    return wrap;
  }

  function buildSubgroupGrid(sg, lang) {
    var grid = document.createElement("div");
    grid.className = "menu-grid";
    sg.items.forEach(function (item) {
      var wrap = document.createElement("div");
      wrap.className = "menu-item";
      var details = document.createElement("div");
      details.className = "item-details";
      var h3 = document.createElement("h3");
      h3.textContent = item.name[lang];
      details.appendChild(h3);

      var subgroupHint = buildItalianHint(lang, item.name.it, item.name[lang]);
      if (subgroupHint) details.appendChild(subgroupHint);

      var p = document.createElement("p");
      item.sizes.forEach(function (size, idx) {
        if (idx > 0) p.appendChild(document.createTextNode(" | "));
        p.appendChild(document.createTextNode(size.label[lang] + ": "));
        var b = document.createElement("b");
        b.textContent = size.price;
        p.appendChild(b);
      });
      details.appendChild(p);

      wrap.appendChild(details);
      grid.appendChild(wrap);
    });
    return grid;
  }
})();
