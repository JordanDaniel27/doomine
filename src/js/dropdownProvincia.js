document.addEventListener("DOMContentLoaded", function () {
  var inputProvincia = document.querySelector(".input-box-provincia");
  inputProvincia.onclick = function () {
    this.classList.toggle("open-provincia");
    let listProvincia = this.nextElementSibling;
    if (listProvincia.style.maxHeight) {
      listProvincia.style.maxHeight = null;
      listProvincia.style.boxShadow = null;
    } else {
      listProvincia.style.maxHeight = listProvincia.scrollHeight + "px";
      listProvincia.style.boxShadow =
        "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)";
    }
  };

  var radProvincia = document.querySelectorAll(".radio-provincia");
  radProvincia.forEach((item) => {
    item.addEventListener("change", () => {
      inputProvincia.innerHTML = item.nextElementSibling.innerHTML;
      inputProvincia.click();
    });
  });
});

/* var label = document.querySelectorAll("label");
function search(searchin) {
  let searchVal = searchin.value;
  searchVal = searchVal.toUpperCase();
  label.forEach((item) => {
    let checkVal = item.querySelector(".name").innerHTML;
    checkVal = checkVal.toUpperCase();
    if (checkVal.indexOf(searchVal) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
    let listProvincia = inputProvincia.nextElementSibling;
    listProvincia.style.maxHeight = listProvincia.scrollHeight + "px";
  });
} */
