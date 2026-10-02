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
console.log("App is running");

const closeBtn = document.querySelector(".closeBtn");
const createBtn = document.querySelector(".createBtn");
const saveBtn = document.querySelector(".saveBtn");
let modalBack = document.querySelector(".modal-background");
let modalContainer = document.querySelector(".modal-container");
let title = document.getElementById("title");
let textArea = document.getElementById("description");
let selected = document.querySelector("#select");
let section = document.querySelector(".section");

// let sectionBtns= Array.from(sectoinClick);

defaultHome();
const sections = [];
createBtn.addEventListener("click", () => {
  createSection("Work out");
});

section.addEventListener("click", (e) => {
  if (e.target.classList.contains("sectoinClick")) {
    const sectoinClick = document.querySelectorAll(".sectoinClick");
    addEventCall();
  }
});

function addEventCall(){
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

saveBtn.addEventListener("click", () => {
  let group = addGroup();
  let date = createDate();
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
