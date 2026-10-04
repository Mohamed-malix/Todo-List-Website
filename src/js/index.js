import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import "../css/style.css";
import "./createDefault.js";
import { format } from "date-fns";
import { createEl, createPa, createBe } from "./createEl.js";
import {
  createSectioneDefault,
  content,
  defaultHome,
} from "./createDefault.js";
import { addTask, addGroup } from "./addTask.js";
import createSection from "./createSection.js";
export { createEl, createPa, addTask, createBe, format, content };

// eslint-disable-next-line no-console -- I like this test, I will keep it (:
console.log("App is running");

const closeBtn = document.querySelector(".closeBtn");
const closeSmallBtn = document.querySelector(".close-sm-modal");
const saveBtn = document.querySelector(".saveBtn");
const createBtn = document.querySelector(".createBtn");
const saveSection = document.querySelector(".save-new-section");
const modalBack = document.querySelector(".modal-background");
const modalContainer = document.querySelector(".modal-container");
const title = document.getElementById("title");
const textArea = document.getElementById("description");
const selected = document.querySelector("#select");
const section = document.querySelector(".section");
const sectionTitle = document.querySelector("#section-title");

window.addEventListener("load", defaultHome());

const sections = [];
createBtn.addEventListener("click", () => {
  document.querySelector(".small-modal-bg").classList.remove("d-none");
  document.querySelector(".small-modal-container").classList.remove("d-none");
});

saveSection.addEventListener("click", () => {
  document.querySelector(".small-modal-bg").classList.add("d-none");
  document.querySelector(".small-modal-container").classList.add("d-none");

  createSection(sectionTitle.value);
  clearInput();
});

section.addEventListener("click", (e) => {
  if (e.target.classList.contains("sectoinClick")) {
    const sectoinClick = document.querySelectorAll(".sectoinClick");
    addEventCall();
  }
});

function addEventCall() {
  const addTaskBtn = createSectioneDefault();
  addTaskBtn.addEventListener("click", () => {
    modalBack.classList.remove("d-none");
    modalContainer.classList.remove("d-none");
  });
}

closeBtn.addEventListener("click", () => {
  modalBack.classList.add("d-none");
  modalContainer.classList.add("d-none");
});

closeSmallBtn.addEventListener("click", () => {
  document.querySelector(".small-modal-bg").classList.add("d-none");
  document.querySelector(".small-modal-container").classList.add("d-none");
});

saveBtn.addEventListener("click", () => {
  const group = addGroup();
  const date = createDate();
  addTask(title.value, group, selected.value, date);
  modalBack.classList.add("d-none");
  modalContainer.classList.add("d-none");

  clearInput();
});

function createDate() {
  const today = new Date();
  const date = format(today, "MM-dd");

  return date;
}

function clearInput() {
  title.value = "";
  selected.value = "";
  textArea.value = "";
}
