
import {createEl} from './createEl.js';


let sidebar =document.querySelector('.sidebar');
let content= document.querySelector('.content');

export function createSection(){
    content.innerHTML='';

    let btnAdd = createEl('button','btnAdd', 'add a task', content);

}
