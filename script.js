let currentLang = "en";

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
  updateCVLink(currentLang);
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
  updateCVLink(currentLang);

  const btn = document.getElementById("lang-btn");
  if (btn) {
    btn.addEventListener("click", toggleLanguage);
  }
});

const cvLink = document.getElementById("cv-download");

function updateCVLink(currentLang) {
  const link = document.getElementById("cv-download");
  const tooltip = link.querySelector(".tooltip");

  if (currentLang === "es") {
    link.href = "cv/Carlos_Montero_CV_ES.pdf";
    link.firstChild.textContent = "📄 Descargar CV (PDF)";
    tooltip.textContent = "Se descargará el CV en español";
  } else {
    link.href = "cv/Carlos_Montero_CV_EN.pdf";
    link.firstChild.textContent = "📄 Download CV (PDF)";
    tooltip.textContent = "The CV will be downloaded in English";
  }
}
