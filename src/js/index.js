
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';
import '../css/style.css';
import './createSection.js';
import {createEl, createPa} from './createEl.js'
import {createSectioneDefault, content} from './createSection.js';
import { addTask, addGroup} from './addTask.js';
export {createEl,createPa, addTask, content};
console.log('App is running');



function defaultHome(){

    let contentDiv= document.querySelector('.content');
    let defaultContainer= createPa('div','defaultContainer',contentDiv);
    createEl('h2', 'welcomeH2', 'Welcome to Blue-Sea Todo-list website!',defaultContainer);
    let defaultText= createPa('div','defaultContent',defaultContainer);
    defaultText.innerHTML=`
    <h4 class='mt-5 mb-2'>How to use Blue-Sea todolist ? it's simple</h4>
    <ol>
        <li class='text'>Click on the section that you want from the sidebar.</li>
        <li class='text'>Add a task you want to finish</li>
    </ol>
`;

}
defaultHome();
let addTaskBtn= createSectioneDefault();


let group= addGroup();
addTaskBtn.addEventListener('click', e=> {

    addTask('reading', group);
})