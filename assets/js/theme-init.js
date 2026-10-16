/* Läuft im <head>, bevor die Seite gezeichnet wird: verhindert ein Aufblitzen
   des falschen Farbschemas. Gespeichert wird nur, was jemand selbst per Knopf
   gewählt hat ("light" oder "dark"), lokal im Browser. Keine Cookies. */
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  } catch (e) { /* Speicher gesperrt: dann gilt einfach die Systemeinstellung */ }
})();
