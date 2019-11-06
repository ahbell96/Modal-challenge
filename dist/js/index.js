// get the modal box.
let modalContainer = document.querySelector(".modalContainer");
let modal = document.querySelector(".modalBox");

let loadModal = () => {
  modalContainer.style.display = "flex";
  console.log("on flex.");
};

window.onclick = event => {
  if (event.target == modalContainer) {
    //modal.classList.toggle(".dispNone");
    modalContainer.style.display = "none";
    console.log("its gone");
  }
};

loadModal();
