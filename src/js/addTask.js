
import { createBe, createEl, content, createPa } from './index.js';
export function addGroup() {
    let tasksGroup= createBe(
        'ul',
        'tasksGroup',
        content,
        document.querySelector('.addTaskBtn')
    );
    
    return tasksGroup;
}

export function addTask(task, group, priority, date) {
   let tasks= createPa('div', 'tasks', group);
   let checkbox= createPa('input', 'check', tasks);
    checkbox.setAttribute('type', 'checkbox');
   createEl('li', 'text', task, tasks);
   createEl('span', 'text', priority, tasks)
   createEl('span', 'date', date, tasks)
   createPa('hr', 'hr', group);
}
