"use strict";

// get the modal box.
var modalContainer = document.querySelector(".modalContainer");
var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modalBox");
var modal2 = document.querySelector(".modalBox2");
var body = document.querySelector("body");
var button1 = document.querySelector(".modalOne");
var button2 = document.querySelector(".modalTwo");
var cancelButton = document.querySelector(".cancelButton");
var cancelLink = document.querySelector(".cancelLink");

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
  } else {
    body.className = "backgroundToNormal";
  }

  if (event.target == cancelButton) {
    overlay.style.display = "none";
  }
};

// cancelButton.onclick = function() {
//   modalContainer.style.display = "none";
//   modalContainer.className = "animateGone";
//   overlay.className = "animateGone";
// };

window.onclick = function(event) {
  if (event.target == modalContainer) {
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
