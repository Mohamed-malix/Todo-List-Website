
import {createPa, createEl, content} from './index.js';


let tasksGroup= createPa('ul', 'tasksGroup', content);
export function addTask(task){
    content.innerHTML='';

    createEl('li', 'text',task, tasksGroup);
    
}