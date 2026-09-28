
import {createBe, createEl, content, createPa} from './index.js';




export function addGroup(){
    let tasksGroup= createBe('ul', 'tasksGroup',content, document.querySelector('.button'));
    
    return tasksGroup;

}


export function addTask(task, group){
   let tasks= createPa('div','tasks',group);
   let checkbox= createPa('input','check',tasks);
    checkbox.setAttribute('type', 'checkbox');

   createEl('li', 'text',task, tasks);
    
}

