
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';
import '../css/style.css';
import './createSection.js';
import {createEl, createPa, createBe} from './createEl.js'
import {createSectioneDefault, content, defaultHome} from './createSection.js';
import { addTask, addGroup} from './addTask.js';
export {createEl,createPa, addTask,createBe, content};
console.log('App is running');




defaultHome();
let addTaskBtn= createSectioneDefault();


let group= addGroup();
addTaskBtn.addEventListener('click', ()=> {

    addTask('reading', group);
})