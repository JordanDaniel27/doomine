document.addEventListener("DOMContentLoaded", function () {
  // Captura el click de abrir
  /*  const openModal = document.querySelector(".mostrar-modal"); */
  // Captura al modal que se quiere mostrar
  const modal = document.querySelector(".modal-filtros");
  //Captura el evento de cierre
  const closeModal = document.querySelector(".modal__close-filtro");
  // Captura el body para bloqueo
  const body = document.querySelector(".body");

  const hiddenCategoriaPrecio = document.querySelector(
    ".hidden-categoria-precio"
  );

  const open = document.querySelector(".open");
  const showCategoriaPrecio = document.querySelector(".show-categoria-precio");
  const addCategoriaPrecio = document.querySelector(".addCategoriaPrecio");
  let openModal = null;

  function getWidth() {
    // Corregir el modal !importante
    let width = window.innerWidth;
    if (width < 768) {
      //Habilita el click para modal
      open.classList.add("mostrar-modal", "cursor-pointer");
      openModal = document.querySelector(".mostrar-modal");
      openModal.addEventListener("click", showModal);
      hiddenCategoriaPrecio.innerHTML = "";
    } else {
      onSelectColor();
      // Quita la opcion de click
      open.classList.remove("mostrar-modal", "cursor-pointer");
      if (openModal) {
        openModal.removeEventListener("click", showModal);
        showCategoriaPrecio.classList.remove("hidden");

        /* hiddenCategoriaPrecio.innerHTML = showCategoriaPrecio.innerHTML; */
        hiddenCategoriaPrecio.appendChild(showCategoriaPrecio);
      }
    }
  }

  function showModal(e) {
    e.preventDefault();

    addCategoriaPrecio.innerHTML = showCategoriaPrecio.innerHTML;
    hiddenCategoriaPrecio.innerHTML = "";

    modal.classList.add("modal--show-filtro");
    body.classList.add("overflow-hidden");

    modal.style.display = "flex";
    onSelectColor();
  }

  getWidth(); // Se ejecuta por primera vez
  window.addEventListener("resize", getWidth);

  closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show-filtro");
    body.classList.remove("overflow-hidden");
  });

  // Función para cerrar el modal
  function closeModa(event) {
    if (event.target === modal) {
      modal.classList.remove("modal--show-filtro");
      body.classList.remove("overflow-hidden");

      /* hiddenCategoriaPrecio.innerHTML = addCategoriaPrecio.innerHTML; */
    }
  }

  function onSelectColor() {
    const colors = document.querySelectorAll(".colors");
    colors.forEach((color) => {
      color.addEventListener("click", (e) => {
        if (!e.target.classList.contains("color")) {
          colors.forEach((c) => {
            c.classList.remove("color");
          });

          e.target.classList.add("color");
        }
      });
    });
  }

  window.addEventListener("click", closeModa);

  /* COLORES */
});
