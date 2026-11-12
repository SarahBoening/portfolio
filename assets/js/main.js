/* Portfolio Sarah Böning: Hell/Dunkel, mobiles Menü, sanftes Einblenden.
   Kein Tracking, keine externen Anfragen. */
(function () {
  "use strict";

  var root = document.documentElement;
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  /* ---------- Hell / Dunkel ---------- */
  var themeToggle = document.querySelector(".theme-toggle");

  function isDark() {
    if (root.dataset.theme) return root.dataset.theme === "dark";
    return darkQuery.matches;
  }

  function syncThemeButton() {
    if (themeToggle) themeToggle.setAttribute("aria-pressed", String(isDark()));
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) { /* egal */ }
      syncThemeButton();
    });
    darkQuery.addEventListener("change", syncThemeButton);
    syncThemeButton();
  }

  /* ---------- Mobiles Menü ---------- */
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  function setMenu(open) {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? menuToggle.dataset.labelClose : menuToggle.dataset.labelOpen);
    mobileNav.classList.toggle("is-open", open);
    mobileNav.toggleAttribute("inert", !open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      var first = mobileNav.querySelector("a");
      if (first) first.focus({ preventScroll: true });
    }
  }

  if (menuToggle && mobileNav) {
    mobileNav.setAttribute("inert", "");
    menuToggle.addEventListener("click", function () {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });
    mobileNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuToggle.focus();
      }
    });
    window.matchMedia("(min-width: 1081px)").addEventListener("change", function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- Einblenden beim Scrollen ---------- */
  var revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
  revealItems.forEach(function (el) { observer.observe(el); });
})();
