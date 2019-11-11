// get the modal box.
let modalContainer = document.querySelector(".modalContainer");
let modal = document.querySelector(".modalBox");
let modal2 = document.querySelector(".modalBox2");
let body = document.querySelector("body");
let button1 = document.querySelector(".modalOne");
let button2 = document.querySelector(".modalTwo");

let modalArr = [];
modalArr.push(modal);
modalArr.push(modal2);
console.log(modalArr);

modalContainer.style.display = "none";

button1.onclick = () => {
  modalContainer.style.display = "block"; // block supported by IE9.
  if ((modal2.style.display = "block")) {
    modal2.style.display = "none";
    modal.style.display = "block";
  }
  if (body.classList.contains("backgroundToNormal")) {
    body.classList.remove("backgroundToNormal");
  }
  body.classList.add("backgroundChange"); // not supported by IE9.
};

button2.onclick = () => {
  modalContainer.style.display = "block";
  if ((modal.style.display = "block")) {
    modal.style.display = "none";
    modal2.style.display = "block";
  }
  if (body.classList.contains("backgroundToNormal")) {
    body.classList.remove("backgroundToNormal");
  }
  body.classList.add("backgroundChange");
};

window.onclick = event => {
  if (event.target == modalContainer) {
    //modal.classList.toggle(".dispNone");
    modalContainer.style.display = "none";
    body.classList.remove("backgroundChange");
    body.classList.add("backgroundToNormal");
  }
};
