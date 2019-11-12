"use strict";

// get the modal box.
var modalContainer = document.querySelector(".modalContainer");
var modal = document.querySelector(".modalBox");
var modal2 = document.querySelector(".modalBox2");
var body = document.querySelector("body");
var button1 = document.querySelector(".modalOne");
var button2 = document.querySelector(".modalTwo");

var modalArr = [];
modalArr.push(modal);
modalArr.push(modal2);
console.log(modalArr);

modalContainer.style.display = "none";

button1.onclick = function() {
  modalContainer.style.display = "block"; // block supported by IE9.
  if ((modal2.style.display = "block")) {
    modal2.style.display = "none";
    modal.style.display = "block";
  }
  if (body.className === "backgroundToNormal") {
    body.className = "backgroundChange";
  } else {
    body.className = "backgroundToNormal";
  }
};

button2.onclick = function() {
  modalContainer.style.display = "block";
  if ((modal.style.display = "block")) {
    modal.style.display = "none";
    modal2.style.display = "block";
  }
  if (body.className === "backgroundToNormal") {
    body.className = "backgroundChange";
  } else {
    body.className = "backgroundToNormal";
  }
};

window.onclick = function(event) {
  if (event.target == modalContainer) {
    if (event.target == button1) {
    }
    //modal.classList.toggle(".dispNone");
    modalContainer.style.display = "none";
    if (body.className === "backgroundChange") {
      body.className = "backgroundToNormal";
    }
    //body.classList.remove("backgroundChange");
    //body.classList.add("backgroundToNormal");
  }
};
