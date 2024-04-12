document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", () => {
    const depa = document.querySelector(".open");
    const prov = document.querySelector(".open-provincia");
    const dist = document.querySelector(".open-distrito");

    const list = document.querySelector(".list");
    const listDistrito = document.querySelector(".list-distrito");
    const listProvincia = document.querySelector(".list-provincia");

    if (depa !== null && depa.classList.contains("open")) {
      if (dist) {
        listDistrito.style.maxHeight = null; // Quita la altura
        listDistrito.style.boxShadow = null; // Quita la sombra
        dist.classList.remove("open-distrito"); // Coloca la flecha en su estado inicial
      }

      if (prov) {
        listProvincia.style.maxHeight = null;
        listProvincia.style.boxShadow = null;
        prov.classList.remove("open-provincia");
      }
    }
    if (prov !== null && prov.classList.contains("open-provincia")) {
      if (dist) {
        listDistrito.style.maxHeight = null; // Quita la altura
        listDistrito.style.boxShadow = null; // Quita la sombra
        dist.classList.remove("open-distrito"); // Coloca la flecha en su estado inicial
      }

      if (depa) {
        list.style.maxHeight = null;
        list.style.boxShadow = null;
        depa.classList.remove("open");
      }
    }

    if (dist !== null && dist.classList.contains("open-distrito")) {
      if (prov) {
        listProvincia.style.maxHeight = null; // Quita la altura
        listProvincia.style.boxShadow = null; // Quita la sombra
        dist.classList.remove("open-provincia"); // Coloca la flecha en su estado inicial
      }

      if (depa) {
        list.style.maxHeight = null;
        list.style.boxShadow = null;
        depa.classList.remove("open");
      }
    }
  });
});
