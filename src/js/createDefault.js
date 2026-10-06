import { createEl, createPa } from "./createEl.js";

export { content, defaultHome, createSectioneDefault };

const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
function defaultHome() {
  const contentDiv = document.querySelector(".content");
  const defaultContainer = createPa("div", "defaultContainer", contentDiv);
  createEl(
    "h2",
    "welcomeH2",
    "Welcome to Blue-Sea Todo-list website!",
    defaultContainer,
  );
  const defaultText = createPa("div", "defaultContent", defaultContainer);
  defaultText.innerHTML = `
    <h4 class='mt-5 mb-2'>How to use Blue-Sea todolist ? it's simple</h4>
    <ol>
        <li class='text'>Click on the section that you want from the sidebar.</li>
        <li class='text'>Add a task you want to finish</li>
    </ol>
    `;
}

function createSectioneDefault() {
  content.innerHTML = "";
  createEl("h4", "header4", "Today:", content);
  const addTaskBtn = createEl("button", "addTaskBtn", "add task", content);
  addTaskBtn.classList.add("button");

  return addTaskBtn;
}
