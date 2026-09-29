
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';
import {format} from 'date-fns';
import '../css/style.css';
import './createSection.js';
import {createEl, createPa, createBe} from './createEl.js'
import {createSectioneDefault, content, defaultHome} from './createSection.js';
import { addTask, addGroup} from './addTask.js';
export {createEl,createPa, addTask,createBe,format, content};
console.log('App is running');




defaultHome();
let addTaskBtn= createSectioneDefault();
let closeBtn= document.querySelector('.closeBtn');
let modalBack= document.querySelector('.modal-background');
let modalContainer= document.querySelector('.modal-container');


let group= addGroup();
addTaskBtn.addEventListener('click', ()=> {

    modalBack.classList.remove('d-none');
    modalContainer.classList.remove('d-none');
    addTask('reading', group);
})


closeBtn.addEventListener('click', ()=> {
    modalBack.classList.add('d-none');
    modalContainer.classList.add('d-none');
})