document.addEventListener("DOMContentLoaded", function () {
  var inputDistrito = document.querySelector(".input-box-distrito");
  inputDistrito.onclick = function () {
    this.classList.toggle("open-distrito");
    let listDistrito = this.nextElementSibling;
    if (listDistrito.style.maxHeight) {
      listDistrito.style.maxHeight = null;
      listDistrito.style.boxShadow = null;
    } else {
      listDistrito.style.maxHeight = listDistrito.scrollHeight + "px";
      listDistrito.style.boxShadow =
        "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)";
    }
  };

  var radDistrito = document.querySelectorAll(".radio-distrito");
  radDistrito.forEach((item) => {
    item.addEventListener("change", () => {
      inputDistrito.innerHTML = item.nextElementSibling.innerHTML;
      inputDistrito.click();
    });
  });
});
