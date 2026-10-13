import { group, sections } from "./index.js";

const section = document.querySelector(".section");
export function displayTask(item) {
    let tasks = "";
    for (let i = 0; item.tasks.length > i; i++) {
        tasks += `
     <div class="tasks-container">
        
        <div class="tasks">
         <div class="task-right d-flex gap-1 align-items-center">
           <input class="check" type="checkbox">
           <li class="text ms-2">${item.tasks[i].name}</li>
         </div>
         <div class="task-left d-flex gap-3 align-items-center">
          <span class="text">${item.tasks[i].priority}</span> 
          <span class="date">${item.tasks[i].date}</span>
          <button class="delete-task">
          <i class="fa-solid fa-trash-can"></i>
          </button>
         </div> 
        </div>
        <hr class="hr">
      </div>
    `;
    }
    group.innerHTML = tasks;

    const deleteTasks = document.querySelectorAll(".delete-task");
    deleteTasks.forEach((btn, j) => {
        btn.addEventListener("click", (e) => {
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
     <div class="sidesection-btn">
       <span class="span-dot"></span>
       <button class="sectoinClick" type="button">${sections[i].name}</button>
     </div>
     <div class="sidesection-deleteGroup">
        <button class="delete-btn">
          <i class="fa-solid fa-xmark"></i>
        </button>
     </div>
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
