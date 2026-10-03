import { createEl, createPa } from "./index.js";

let sectionsContainer = document.querySelector(".section");
export default function createSection(name) {
  const secContainer=createPa('div','secContainer',sectionsContainer);
  createPa('span','span-dot',secContainer)
  const newSection = createEl("button", "sectoinClick", name, secContainer);
  newSection.setAttribute("type", "button");

}
