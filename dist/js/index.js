"use strict";

// get the modal box.
var modalContainer = document.querySelector(".modalContainer");
var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modalBox");
var modal2 = document.querySelector(".modalBox2");
var body = document.querySelector("body");
var button1 = document.querySelector(".modalOne");
var button2 = document.querySelector(".modalTwo");

modalContainer.style.display = "none";

button1.onclick = function() {
  modalContainer.style.display = "block"; // block supported by IE9.
  overlay.style.display = "block";
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
  overlay.style.display = "block";
  if ((modal.style.display = "block")) {
    modal.style.display = "none";
    modal2.style.display = "block";
  }
  if (body.className === "backgroundToNormal") {
    body.className = "backgroundChange";
    overlay.style.transition = "ease-in-out 2s";
  } else {
    body.className = "backgroundToNormal";
  }
};

window.onclick = function(event) {
  if (event.target == modalContainer || event.target == overlay) {
    //modal.classList.toggle(".dispNone");
    overlay.style.display = "none";
    modalContainer.style.display = "none";
    if (body.className === "backgroundChange") {
      body.className = "backgroundToNormal";
    }
    //body.classList.remove("backgroundChange");
    //body.classList.add("backgroundToNormal");
  }
};
