
import { createEl, createPa } from "./index.js";

let sectionsContainer= document.querySelector('.section');
export default function createSection(name) {
   let newSection= createEl('button', 'sectoinClick', name, sectionsContainer,)
   newSection.setAttribute('type', 'button');
}