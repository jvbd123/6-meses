function abrirMes(pagina) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = pagina;
  }, 400);
}

function initCarousel() {
  const slides = document.querySelector(".slides");
  const total = document.querySelectorAll(".slides img").length;
  let index = 0;

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!slides || !nextBtn || !prevBtn) return; // Evita erro se faltar algum elemento

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
  });
}

// Inicializa o carrossel após o carregamento da página
document.addEventListener("DOMContentLoaded", initCarousel);
