// get the modal box.
let modalContainer = document.querySelector(".modalContainer");
let modal = document.querySelector(".modalBox");
let body = document.getElementById("body");

let loadModal = () => {
  modalContainer.style.display = "flex";
};

window.onclick = event => {
  if (event.target == modalContainer) {
    //modal.classList.toggle(".dispNone");
    modalContainer.style.display = "none";
  }
};

loadModal();
