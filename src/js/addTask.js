
import {createBe, createEl, content, createPa} from './index.js';




export function addGroup(){
    let tasksGroup= createBe('ul', 'tasksGroup',content, document.querySelector('.button'));
    
    return tasksGroup;

}


export function addTask(task, group){
   let tasks= createPa('div','tasks',group);
    createPa('input','check',tasks);
   createEl('li', 'text',task, tasks);
    
}

