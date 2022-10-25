"use strict";

const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnOpenModel = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnOpenModel.length; i++)
  btnOpenModel[i].addEventListener("click", openModel);

btnCloseModel.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

function openModel() {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModel() {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeModel();
  }
});
