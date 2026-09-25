
import {createPa, createEl, content} from './index.js';


export function addTask(task){
    
    let tasksGroup= createPa('ul', 'tasksGroup', content);
    createEl('li', 'text',task, tasksGroup);
    
}