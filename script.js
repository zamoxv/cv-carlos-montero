let currentLang = "es";

function applyLanguage() {
  // Rellena todos los textos según el idioma actual
  document.querySelectorAll("[data-es]").forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text) {
      el.innerText = text;
    }
  });

  // Actualiza el texto del botón
  const btn = document.getElementById("lang-btn");
  if (btn) {
    btn.innerText = currentLang === "es" ? "🌐 Español" : "🌐 English";
  }
}

function toggleLanguage() {
  // Alternar idioma
  currentLang = currentLang === "es" ? "en" : "es";
  applyLanguage();
}

// Cuando cargue la página:
document.addEventListener("DOMContentLoaded", () => {
  // 1) Aplicamos el idioma inicial (español)
  applyLanguage();

  // 2) Conectamos el botón
  const btn = document.getElementById("lang-btn");
  if (btn) {
    btn.addEventListener("click", toggleLanguage);
  }
});
