
import {
    createEl,
    createPa
} from './createEl.js';

export {
    content,
    defaultHome,
    createSectioneDefault,
}

let sidebar =document.querySelector('.sidebar');
let content= document.querySelector('.content');

function defaultHome() {
    let contentDiv= document.querySelector('.content');
    let defaultContainer= createPa('div','defaultContainer',contentDiv);
    createEl('h2','welcomeH2','Welcome to Blue-Sea Todo-list website!',defaultContainer);
    let defaultText= createPa('div','defaultContent',defaultContainer);
    defaultText.innerHTML=`
    <h4 class='mt-5 mb-2'>How to use Blue-Sea todolist ? it's simple</h4>
    <ol>
        <li class='text'>Click on the section that you want from the sidebar.</li>
        <li class='text'>Add a task you want to finish</li>
    </ol>
    `;
}

function createSectioneDefault() {
    content.innerHTML='';
   let header4= createEl('h4', 'header4', 'Today:', content);
   let addTaskBtn = createEl('button', 'button', 'add task', content);

    return addTaskBtn;
}
