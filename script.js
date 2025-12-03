let currentLang = "es";

function applyLanguage() {
  document.querySelectorAll("[data-es]", "[data-en]").forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text) {
      el.innerHTML = text;
    }
  });

  const btn = document.getElementById("lang-btn");
  if (btn) {
    btn.innerText = currentLang === "es" ? "🌐 Español" : "🌐 English";
  }
}

function toggleLanguage() {
  currentLang = currentLang === "es" ? "en" : "es";
  applyLanguage();
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();

  const btn = document.getElementById("lang-btn");
  if (btn) {
    btn.addEventListener("click", toggleLanguage);
  }
});
