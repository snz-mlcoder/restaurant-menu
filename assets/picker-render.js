// Builds a language's category-picker page ("choose Coffee/Drinks/Food/Snacks")
// from window.MENU_DATA + window.SITE_LANGS. Invoked via:
//   <script src=".../picker-render.js" data-lang="it"></script>
(function () {
  var scriptTag = document.currentScript;
  var lang = scriptTag.getAttribute("data-lang");
  var root = document.getElementById("menu-root");
  var up = window.relPrefix(scriptTag.getAttribute("src"));

  document.title = window.PICKER_TITLE[lang];
  document.documentElement.lang = lang;

  var navBack = document.createElement("div");
  navBack.className = "nav-back";
  var backLink = document.createElement("a");
  backLink.href = up + "index.html";
  backLink.textContent = window.CHANGE_LANGUAGE_LABEL[lang];
  navBack.appendChild(backLink);
  root.appendChild(navBack);

  var header = document.createElement("header");
  header.className = "bar-header";

  var logo = document.createElement("img");
  logo.src = up + "logo.jpg";
  logo.alt = "Bar Canton";
  logo.className = "bar-logo";
  header.appendChild(logo);

  var h1 = document.createElement("h1");
  h1.textContent = "Bar Canton";
  header.appendChild(h1);

  var tagline = document.createElement("p");
  tagline.textContent = window.PICKER_TAGLINE[lang];
  header.appendChild(tagline);

  root.appendChild(header);

  var categories = document.createElement("div");
  categories.className = "main-categories";

  window.CATEGORY_ORDER.forEach(function (slug) {
    var a = document.createElement("a");
    a.className = "menu-box";
    a.href = up + window.categoryHref(lang, slug);
    var span = document.createElement("span");
    span.textContent = window.CATEGORY_ICON[slug] + " " + window.MENU_DATA[slug].menuBoxLabel[lang];
    a.appendChild(span);
    categories.appendChild(a);
  });

  root.appendChild(categories);
})();
