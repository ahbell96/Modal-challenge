"use strict";

// get the modal box.
var modalContainer = document.querySelector(".modalContainer");
var modal = document.querySelector(".modalBox");
var body = document.querySelector("body");
var main = document.getElementById("main");

var loadModal = function loadModal() {
  modalContainer.style.display = "flex"; // not supported by IE9.
  body.classList.add("backgroundChange"); // not supported by IE9.
};

window.onclick = function (event) {
  if (event.target == modalContainer) {
    //modal.classList.toggle(".dispNone");
    modalContainer.style.display = "none";
    body.classList.remove("backgroundChange");
    body.classList.add("background-to-normal");
  }
};

loadModal();