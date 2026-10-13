import { createEl, createPa } from "./index.js";

const sectionsContainer = document.querySelector(".section");
export default function createSection(name) {
    const secContainer = createPa("div", "secContainer", sectionsContainer);
    const sidesectionBtn = createPa("div", "sidesectionBtn", secContainer);
    createPa("div", "sidesectionDelete", secContainer);
    createPa("span", "span-dot", sidesectionBtn);
    const newSection = createEl("button", "sectoinClick", name, sidesectionBtn);
    newSection.setAttribute("type", "button");
}
