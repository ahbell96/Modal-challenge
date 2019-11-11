// get the modal box.
let modalContainer = document.querySelector(".modalContainer");
let modal = document.querySelector(".modalBox");
let body = document.querySelector("body");
let main = document.getElementById("main");
let button1 = document.querySelector(".listItem1");

modalContainer.style.display = "none";

button1.onclick = () => {
  modalContainer.style.display = "block"; // not supported by IE9.
  if (body.classList.contains("backgroundToNormal")) {
    body.classList.remove("backgroundToNormal");
  }
  body.classList.add("backgroundChange"); // not supported by IE9.
};

window.onclick = event => {
  if (event.target == modalContainer) {
    //modal.classList.toggle(".dispNone");
    modalContainer.style.display = "none";
    body.classList.remove("backgroundChange");
    body.classList.add("backgroundToNormal");
  }
};

loadModal();
