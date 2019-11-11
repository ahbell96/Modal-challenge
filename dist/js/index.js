// get the modal box.
let modalContainer = document.querySelector(".modalContainer");
let modal = document.querySelector(".modalBox");
let body = document.querySelector("body");
let main = document.getElementById("main");

let loadModal = () => {
  modalContainer.style.display = "flex"; // not supported by IE9.
  body.classList.add("backgroundChange"); // not supported by IE9.
};

window.onclick = event => {
  if (event.target == modalContainer) {
    //modal.classList.toggle(".dispNone");
    modalContainer.style.display = "none";
    body.classList.remove("backgroundChange");
    body.classList.add("background-to-normal");
  }
};

loadModal();
