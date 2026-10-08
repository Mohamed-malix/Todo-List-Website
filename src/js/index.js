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

let sections = [
  { name: "Work", tasks: [] },
  { name: "Study", tasks: [] },
  { name: "Personal", tasks: [] },
];
window.addEventListener("load", defaultHome());
if (JSON.parse(localStorage.getItem("sections")).length > 0) {
  console.log(JSON.parse(localStorage.getItem("sections")));
  sections = JSON.parse(localStorage.getItem("sections"));
  console.log(sections);
}

createBtn.addEventListener("click", () => {
  document.querySelector(".small-modal-bg").classList.remove("d-none");
  document.querySelector(".small-modal-container").classList.remove("d-none");
});

saveSection.addEventListener("click", () => {
  document.querySelector(".small-modal-bg").classList.add("d-none");
  document.querySelector(".small-modal-container").classList.add("d-none");

  createSection(sectionTitle.value);
  sections.push({ name: sectionTitle.value, tasks: [] });
  clearInput();
});

let group;
let foundTask;
saveBtn.addEventListener("click", () => {
  const date = createDate();
  const task = {
    date,
    name: title.value,
    priority: selected.value,
    checked: false,
  };
  addTask(task, group);
  foundTask.push(task);
  modalBack.classList.add("d-none");
  modalContainer.classList.add("d-none");
  clearInput();
});

section.addEventListener("click", (e) => {
  if (e.target.classList.contains("sectoinClick")) {
    createPa("div", "group", document.querySelector(".content"));
    const sectionBtns = document.querySelectorAll(".sectoinClick");
    sections.forEach((item) => {
      if (item.name == e.target.textContent) {
        // console.log(e.target.textContent);
        foundTask = item.tasks;
        addEventCall();
        console.log(sections);
      }
    });
  }
});

function addEventCall() {
  const addTaskBtn = createSectioneDefault();
  group = addGroup();
  addTaskBtn.addEventListener("click", () => {
    modalBack.classList.remove("d-none");
    modalContainer.classList.remove("d-none");
  });
}
localStorage.setItem("sections", JSON.stringify(sections));

closeBtn.addEventListener("click", () => {
  modalBack.classList.add("d-none");
  modalContainer.classList.add("d-none");
});

closeSmallBtn.addEventListener("click", () => {
  document.querySelector(".small-modal-bg").classList.add("d-none");
  document.querySelector(".small-modal-container").classList.add("d-none");
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
