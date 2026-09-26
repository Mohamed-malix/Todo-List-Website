
import {createEl, createPa} from './createEl.js';


let sidebar =document.querySelector('.sidebar');
export let content= document.querySelector('.content');


export function createSectioneDefault(){
    content.innerHTML='';

   let header4= createEl('h4', 'header4', 'Today:', content);
   let addTaskBtn = createEl('button','button', 'add task', content);

   return addTaskBtn;

}
