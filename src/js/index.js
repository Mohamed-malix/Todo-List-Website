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

let sections;
window.addEventListener("load", defaultHome());
if (
  localStorage.getItem("sections") === "undefined" ||
  localStorage.getItem("sections") === null
) {
  sections = [
    { name: "Work", tasks: [] },
    { name: "Study", tasks: [] },
    { name: "Personal", tasks: [] },
  ];
} else {
  sections = JSON.parse(localStorage.getItem("sections"));
}
displaySection();

createBtn.addEventListener("click", () => {
  document.querySelector(".small-modal-bg").classList.remove("d-none");
  document.querySelector(".small-modal-container").classList.remove("d-none");
});

saveSection.addEventListener("click", () => {
  document.querySelector(".small-modal-bg").classList.add("d-none");
  document.querySelector(".small-modal-container").classList.add("d-none");

  createSection(sectionTitle.value);
  sections.push({ name: sectionTitle.value, tasks: [] });
  localStorage.setItem("sections", JSON.stringify(sections));
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
  localStorage.setItem("sections", JSON.stringify(sections));
  clearInput();
});

section.addEventListener("click", (e) => {
  if (e.target.classList.contains("sectoinClick")) {
    createPa("div", "group", document.querySelector(".content"));
    const sectionBtns = document.querySelectorAll(".sectoinClick");
    console.log(sections);
    sections.forEach((item) => {
      if (item.name == e.target.textContent) {
        // console.log(e.target.textContent);
        foundTask = item.tasks;
        addEventCall(item);
      }
    });
  }
});

function addEventCall(item) {
  const addTaskBtn = createSectioneDefault();
  group = addGroup();
  displayTask(item);
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

function displayTask(item) {
  let tasks = "";
  for (let i = 0; item.tasks.length > i; i++) {
    tasks += `
       <div class="tasks">
        <input class="check" type="checkbox">
        <li class="text">${item.tasks[i].name}</li>
        <span class="text">${item.tasks[i].priority}</span>
        <span class="date">${item.tasks[i].date}</span>
       </div>
       <hr class="hr">
    `;
  }
  group.innerHTML = tasks;
}

function displaySection() {
  let sectionAdd = "";
  for (let i = 3; sections.length > i; i++) {
    sectionAdd += `
    <div class="secContainer">
     <span class="span-dot"></span>
     <button class="sectoinClick" type="button">${sections[i].name}</button>
    </div>
    `;
  }
  section.innerHTML += sectionAdd;
}
