
import {createEl, createPa} from './createEl.js';


let sidebar =document.querySelector('.sidebar');
export let content= document.querySelector('.content');
export let btnAdd;


export function createSectioneDefault(){
    content.innerHTML='';

    btnAdd = createEl('button','button', 'add task', content);
    let sectionText= createPa('div', 'sectionText', content);
   let header4= createEl('h4', 'header4', 'Click on "add task" to start building your todo list', sectionText);

}
