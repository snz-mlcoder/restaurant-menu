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

window.CATEGORY_ORDER = ["coffee-croissants", "drinks", "foods", "snacks", "desserts"];
window.CATEGORY_ICON = {
  "coffee-croissants": "☕",
  "drinks": "🍹",
  "foods": "🍕",
  "snacks": "🥪",
  "desserts": "🍰",
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

// ---- Allergens ----
// Numbered legend matching the printed menu's allergen footnotes (EU Reg.
// 1169/2011, Allegato II). `items[].allergens` (in menu-data.js) hold the
// numbers that apply to each dish; this is just the number -> name lookup.
window.ALLERGEN_LEGEND = [
  { num: 1, name: { en: "Gluten", it: "Glutine", es: "Gluten", fr: "Gluten", de: "Gluten", zh: "麸质（谷蛋白）" } },
  { num: 2, name: { en: "Crustaceans", it: "Crostacei", es: "Crustáceos", fr: "Crustacés", de: "Krebstiere", zh: "甲壳类" } },
  { num: 3, name: { en: "Eggs", it: "Uova", es: "Huevos", fr: "Œufs", de: "Eier", zh: "鸡蛋" } },
  { num: 4, name: { en: "Fish", it: "Pesce", es: "Pescado", fr: "Poisson", de: "Fisch", zh: "鱼类" } },
  { num: 5, name: { en: "Peanuts", it: "Arachidi", es: "Cacahuetes", fr: "Arachides", de: "Erdnüsse", zh: "花生" } },
  { num: 6, name: { en: "Soy", it: "Soia", es: "Soja", fr: "Soja", de: "Soja", zh: "大豆" } },
  { num: 7, name: { en: "Milk", it: "Latte", es: "Leche", fr: "Lait", de: "Milch", zh: "牛奶" } },
  { num: 8, name: { en: "Celery", it: "Sedano", es: "Apio", fr: "Céleri", de: "Sellerie", zh: "芹菜" } },
  { num: 9, name: { en: "Mustard", it: "Senape", es: "Mostaza", fr: "Moutarde", de: "Senf", zh: "芥末" } },
  { num: 10, name: { en: "Sulphur Dioxide & Sulphites", it: "Anidride Solforosa e Solfiti", es: "Anhídrido Sulfuroso y Sulfitos", fr: "Anhydride Sulfureux et Sulfites", de: "Schwefeldioxid und Sulfite", zh: "二氧化硫和亚硫酸盐" } },
  { num: 11, name: { en: "Sesame", it: "Sesamo", es: "Sésamo", fr: "Sésame", de: "Sesam", zh: "芝麻" } },
  { num: 12, name: { en: "Lupin", it: "Lupini", es: "Altramuces", fr: "Lupin", de: "Lupinen", zh: "羽扇豆" } },
  { num: 13, name: { en: "Tree Nuts", it: "Frutta a Guscio", es: "Frutos de Cáscara", fr: "Fruits à Coque", de: "Schalenfrüchte", zh: "坚果" } },
  { num: 14, name: { en: "Molluscs", it: "Molluschi", es: "Moluscos", fr: "Mollusques", de: "Weichtiere", zh: "软体动物" } },
];

window.ALLERGEN_PAGE_TITLE = {
  en: "Allergen Guide", it: "Guida Allergeni", es: "Guía de Alérgenos",
  fr: "Guide des Allergènes", de: "Allergen-Leitfaden", zh: "过敏原指南",
};

window.ALLERGEN_PAGE_INTRO = {
  en: "Numbers next to menu items refer to the allergens below. Please tell staff about any allergy before ordering.",
  it: "I numeri accanto agli articoli del menù si riferiscono agli allergeni qui sotto. Segnalate qualsiasi allergia al personale prima di ordinare.",
  es: "Los números junto a los platos del menú se refieren a los alérgenos siguientes. Informe al personal de cualquier alergia antes de pedir.",
  fr: "Les numéros à côté des plats du menu renvoient aux allergènes ci-dessous. Merci de signaler toute allergie au personnel avant de commander.",
  de: "Die Nummern neben den Menüpunkten verweisen auf die unten aufgeführten Allergene. Bitte informieren Sie das Personal vor der Bestellung über etwaige Allergien.",
  zh: "菜单项目旁边的数字对应下方的过敏原列表。点餐前请告知工作人员您的过敏情况。",
};

window.ALLERGEN_BOX_LABEL = {
  en: "Allergen Guide", it: "Guida Allergeni", es: "Guía de Alérgenos",
  fr: "Guide des Allergènes", de: "Allergen-Leitfaden", zh: "过敏原指南",
};

window.ALLERGEN_LINK_LABEL = {
  en: "View allergen key →", it: "Vedi legenda allergeni →", es: "Ver leyenda de alérgenos →",
  fr: "Voir la légende des allergènes →", de: "Allergen-Legende ansehen →", zh: "查看过敏原说明 →",
};

// Root-relative allergens page path.
window.allergensHref = function (targetLang) {
  return targetLang === "en" ? "allergens/index.html" : targetLang + "/allergens/index.html";
};
