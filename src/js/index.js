
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';
import '../css/style.css';
import './createSection.js';
import {format} from 'date-fns';
import {
    createEl, 
    createPa,
    createBe,
} from './createEl.js'
import {
    createSectioneDefault,
    content, 
    defaultHome,
} from './createSection.js';
import {
    addTask,
    addGroup,
} from './addTask.js';
export {
    createEl,
    createPa,
    addTask,
    createBe,
    format,
    content,
};
console.log('App is running');




defaultHome();
const sectoinClick =document.querySelector('.sectoinClick');
const closeBtn= document.querySelector('.closeBtn');
const saveBtn= document.querySelector('.saveBtn');
let modalBack= document.querySelector('.modal-background');
let modalContainer= document.querySelector('.modal-container');
let title= document.getElementById('title');
let textArea= document.getElementById('description');
let selected= document.querySelector('#select');




sectoinClick.addEventListener('click', () => {

   const addTaskBtn= createSectioneDefault();
    const sections=[];

    addTaskBtn.addEventListener('click', ()=> {

    modalBack.classList.remove('d-none');
    modalContainer.classList.remove('d-none');
    })
})



closeBtn.addEventListener('click', ()=> {
    modalBack.classList.add('d-none');
    modalContainer.classList.add('d-none');
})


saveBtn.addEventListener('click', () => {
    
    let group=addGroup();
    let date= createDate();

    addTask(title.value, group,selected.value,date);
    modalBack.classList.add('d-none');
    modalContainer.classList.add('d-none');


    clearInput();
})


function createDate(){
    const today= new Date();
    const date= format(today, 'MM-dd');

    return date;
}

function clearInput(){
    title.value='';
    selected.value='';
    textArea.value='';
}