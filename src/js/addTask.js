
import {createPa, createEl, content} from './index.js';




export function addGroup(){
    let tasksGroup= createPa('ul', 'tasksGroup', content);

    return tasksGroup;

}


export function addTask(task, group){
    
   createEl('li', 'text',task, group);
    
}

