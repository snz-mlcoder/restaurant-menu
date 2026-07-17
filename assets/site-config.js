// Single source of truth for the language row, nav-back labels, and category
// picker order -- shared by menu-render.js and picker-render.js so adding a
// language or tweaking copy happens in one place instead of N hand-copied
// HTML blocks.
window.SITE_LANGS = [
  { code: "en", flag: "🇬🇧", label: "English", available: true },
  { code: "it", flag: "🇮🇹", label: "Italiano", available: true },
  { code: "es", flag: "🇪🇸", label: "Español", available: true },
  { code: "fr", flag: "🇫🇷", label: "Français", available: true },
  { code: "de", flag: "🇩🇪", label: "Deutsch", available: true },
  { code: "zh", flag: "🇨🇳", label: "中文", available: true },
];

window.NAV_BACK_LABEL = {
  en: "← Back to Main Menu",
  it: "← Torna al Menu Principale",
  es: "← Volver al Menú Principal",
  fr: "← Retour au Menu Principal",
  de: "← Zurück zum Hauptmenü",
  zh: "← 返回主菜单",
};

window.CHANGE_LANGUAGE_LABEL = {
  en: "← Change language",
  it: "← Cambia lingua",
  es: "← Cambiar idioma",
  fr: "← Changer de langue",
  de: "← Sprache ändern",
  zh: "← 更改语言",
};

window.CATEGORY_ORDER = ["coffee-croissants", "drinks", "foods", "snacks"];
window.CATEGORY_ICON = {
  "coffee-croissants": "☕",
  "drinks": "🍹",
  "foods": "🍕",
  "snacks": "🥪",
};

// All hrefs are computed relative to the site root, then combined with
// relPrefix() (below) so pages work identically whether opened straight off
// disk (file://, no server) or served from a real HTTP root -- root-absolute
// paths like "/foods/index.html" only work in the latter case.

// Root-relative category page path. English lives at the site root (no
// prefix); every other language lives under <lang>/.
window.categoryHref = function (targetLang, pageSlug) {
  return targetLang === "en"
    ? pageSlug + "/index.html"
    : targetLang + "/" + pageSlug + "/index.html";
};

// Root-relative picker page path (the per-language "choose a category" page).
window.pickerHref = function (targetLang) {
  return targetLang + "/index.html";
};

// Given the literal `src` a script tag was loaded with (e.g.
// "../../assets/menu-render.js"), returns the "../" prefix needed to get
// from the current page back up to the site root -- so a page's own
// script tag is the single source of truth for how deep it's nested.
window.relPrefix = function (scriptSrc) {
  var depth = (scriptSrc.match(/\.\.\//g) || []).length;
  var prefix = "";
  for (var i = 0; i < depth; i++) prefix += "../";
  return prefix;
};

window.PICKER_TAGLINE = {
  en: "Welcome! Please select a category to view our menu",
  it: "Benvenuti! Scegliete una categoria per vedere il menu",
  es: "¡Bienvenidos! Elija una categoría para ver el menú",
  fr: "Bienvenue ! Choisissez une catégorie pour voir le menu",
  de: "Willkommen! Bitte wählen Sie eine Kategorie, um das Menü zu sehen",
  zh: "欢迎光临！请选择一个类别查看菜单",
};

window.PICKER_TITLE = {
  en: "Bar Canton - Digital Menu",
  it: "Bar Canton - Menu Digitale",
  es: "Bar Canton - Menú Digital",
  fr: "Bar Canton - Menu Numérique",
  de: "Bar Canton - Digitale Speisekarte",
  zh: "Bar Canton - 电子菜单",
};
