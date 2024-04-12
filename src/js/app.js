document.addEventListener("DOMContentLoaded", function () {
  onSelectColor();

  /* revisar */
  const checks = document.querySelectorAll(".onCheck");

  checks.forEach((check) => {
    check.addEventListener("click", () => {
      if (check.checked) {
        checks.forEach((otherCheck) => {
          if (otherCheck !== check) {
            otherCheck.checked = false;
          }
        });

        // Marcar el check actual
        check.checked = true;
      } else {
        // Desmarcar todos los checks excepto el actual
        check.checked = false;
      }
    });
  });
});

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

function mostrarContrasena() {
  var campo = document.getElementById("contrasena");

  if (campo.type === "password") {
    campo.type = "text";
  } else {
    campo.type = "password";
  }
}
