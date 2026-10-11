import { sections, group } from "./index.js";

const section = document.querySelector(".section");
export function displayTask(item) {
  let tasks = "";
  for (let i = 0; item.tasks.length > i; i++) {
    tasks += `
     <div class="tasks-container">
        <div class="tasks">
        <input class="check" type="checkbox">
        <li class="text">${item.tasks[i].name}</li>
        <span class="text">${item.tasks[i].priority}</span>
        <span class="date">${item.tasks[i].date}</span>
        <button class="delete-task">
          <i class="fa-solid fa-xmark"></i>
        </button>
        </div>
        <hr class="hr">
      </div>
    `;
  }
  group.innerHTML = tasks;

  const deleteTasks = document.querySelectorAll(".delete-task");
  deleteTasks.forEach((btn, j) => {
    btn.addEventListener("click", (e) => {
      const index = sections.indexOf(item);
      console.log(item.tasks[j], index);

      item.tasks.splice(j, 1);
      localStorage.setItem("sections", JSON.stringify(sections));
      e.target.closest(".tasks-container").remove();
    });
  });
}

export let deleteBtns;
export function displaySection() {
  let sectionAdd = "";
  for (let i = 3; sections.length > i; i++) {
    sectionAdd += `
    <div class="secContainer">
     <span class="span-dot"></span>
     <button class="sectoinClick" type="button">${sections[i].name}</button>
     <button class="delete-btn">
        <i class="fa-solid fa-xmark"></i>
     </button>
    </div>
    `;
  }

  section.innerHTML += sectionAdd;
  deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((btn, j) => {
    btn.addEventListener("click", (e) => {
      const sectionObject = sections[j + 3];
      const index = sections.indexOf(sectionObject);

      e.target.closest(".secContainer").remove();
      sections.splice(index, 1);
      localStorage.setItem("sections", JSON.stringify(sections));
    });
  });
}
