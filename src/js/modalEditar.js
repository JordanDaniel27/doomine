document.addEventListener("DOMContentLoaded", function () {
  const openModal = document.querySelectorAll(".mostrar-mas");
  const modal = document.querySelector(".modal-mostrar");
  const closeModal = document.querySelectorAll(".modal__close-mostrar");
  const body = document.querySelector(".body");

  openModal.forEach((open) => {
    open.addEventListener("click", (e) => {
      e.preventDefault();

      modal.classList.add("modal--show");
      body.classList.add("overflow-hidden");
      modal.style.display = "flex";
    });
  });

  closeModal.forEach((close) => {
    close.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("modal--show");
      body.classList.remove("overflow-hidden");
    });
  });

  // Función para cerrar el modal
  function closeModa(event) {
    console.log(event.target);
    if (event.target === modal) {
      modal.classList.remove("modal--show");
      body.classList.remove("overflow-hidden");
    }
  }

  window.addEventListener("click", closeModa);
});
