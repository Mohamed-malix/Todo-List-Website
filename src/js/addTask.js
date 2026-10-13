import { content, createBe, createEl, createPa } from "./index.js";

export function addGroup() {
    const tasksGroup = createBe(
        "ul",
        "tasksGroup",
        content,
        document.querySelector(".addTaskBtn")
    );

    return tasksGroup;
}

export function addTask(task, group) {
    const tasks = createPa("div", "tasks", group);
    const tasksRight = createPa("div", "task-right", tasks);
    const tasksLeft = createPa("div", "task-left", tasks);
    const checkbox = createPa("input", "check", tasksRight);
    checkbox.setAttribute("type", "checkbox");
    createEl("li", "text", task.name, tasksRight);
    createEl("span", "text", task.priority, tasksLeft);
    createEl("span", "date", task.date, tasksLeft);
    const deleteTaskBtn = createPa("button", "delete-task", tasksLeft);
    deleteTaskBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    createPa("hr", "hr", group);

    return tasks;
}
