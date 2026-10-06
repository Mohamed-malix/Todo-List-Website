import { createBe, createEl, content, createPa } from "./index.js";
export function addGroup() {
  const tasksGroup = createBe(
    "ul",
    "tasksGroup",
    content,
    document.querySelector(".addTaskBtn"),
  );

  return tasksGroup;
}

export function addTask(task, group) {
  const tasks = createPa("div", "tasks", group);
  const checkbox = createPa("input", "check", tasks);
  checkbox.setAttribute("type", "checkbox");
  createEl("li", "text", task.name, tasks);
  createEl("span", "text", task.priority, tasks);
  createEl("span", "date", task.date, tasks);
  createPa("hr", "hr", group);

  return tasks;
}
