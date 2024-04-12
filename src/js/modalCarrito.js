document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("check");
  const bag = document.querySelector(".bag");
  const bodyModalCarrito = document.querySelector(".body");
  let isMenuOpen = false; // Variable para controlar el estado del menú
  const card = document.querySelector(".cartContainer");
  checkbox.addEventListener("click", checkboxOnClick);

  // Agregar event listener al checkbox para controlar el estado del menú
  function checkboxOnClick() {
    // Cambiar el top del carrito
    const scrollTopPosition = window.scrollY;
    card.style.top = scrollTopPosition + "px";

    isMenuOpen = checkbox.checked;
    if (isMenuOpen) {
      bodyModalCarrito.classList.add("dark");
      bodyModalCarrito.classList.add("overflow-hidden");
      // Agregar el event listener al documento cuando se abre el menú
      document.addEventListener("click", handleDocumentClick);
    } else {
      bodyModalCarrito.classList.remove("dark");
      bodyModalCarrito.classList.remove("overflow-hidden");
      // Quitar el event listener del documento cuando se cierra el menú
      document.removeEventListener("click", handleDocumentClick);
    }
  }

  // Función para manejar el clic en el documento
  function handleDocumentClick(event) {
    // Verificar si el menú está abierto y si el clic no ocurrió dentro del nav ni en el checkbox
    if (
      isMenuOpen &&
      !bag.contains(event.target) &&
      event.target !== checkbox
    ) {
      bag.classList.add("hidden"); // Ocultar el nav
      checkbox.checked = false; // Desmarcar el checkbox
      bodyModalCarrito.classList.remove("dark");
      bodyModalCarrito.classList.remove("overflow-hidden");
      isMenuOpen = false; // Actualizar el estado del menú
      // Quitar el event listener del documento después de cerrar el menú
      document.removeEventListener("click", handleDocumentClick);
    }
  }

  // Detener la propagación de clics dentro del nav para evitar cerrarlo al hacer clic dentro
  bag.addEventListener("click", function (event) {
    event.stopPropagation(); // Evitar que el clic se propague al documento
  });
});
