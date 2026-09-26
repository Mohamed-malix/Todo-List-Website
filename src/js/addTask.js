
import {createBe, createEl, content} from './index.js';




export function addGroup(){
    let tasksGroup= createBe('ul', 'tasksGroup',content, document.querySelector('.button'));

    return tasksGroup;

}


export function addTask(task, group){
    
   createEl('li', 'text',task, group);
    
}

