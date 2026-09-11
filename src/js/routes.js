/* Central URL map.
   data.js identifies projects by historical slugs ("orbit-hq"); the public URLs
   use readable ones ("/cpt-funded/"). Keep both in sync here — nothing else
   should hard-code a project URL. */
window.PROJECT_URLS = {
  "northwind": null,                 // external — links straight to usehaya.io
  "vault-co": "3ex-mobile",
  "lumen-health": "nebula-protocol",
  "cartwheel": "3ex-web-exchange",
  "orbit-hq": "cpt-funded"
};

/* Reverse lookup, for the case-study shells that declare their own slug. */
window.PROJECT_SLUG_BY_URL = Object.keys(window.PROJECT_URLS).reduce(function (acc, slug) {
  var url = window.PROJECT_URLS[slug];
  if (url) acc[url] = slug;
  return acc;
}, {});

/* The href a project card should point at: an external product link when the
   project has one, otherwise its case-study page. */
window.projectHref = function (p) {
  if (!p) return "/work/";
  if (p.external && p.link) return p.link;
  var url = window.PROJECT_URLS[p.slug];
  return url ? "/" + url + "/" : "/work/";
};
