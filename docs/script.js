// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Animações de entrada
const elementos = document.querySelectorAll(".card, .timeline-content, .hero-left, .hero-right, .projetos-titulo");

const aparecer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animado");
    }
  });
}, { threshold: 0.2 });

elementos.forEach(el => aparecer.observe(el));
