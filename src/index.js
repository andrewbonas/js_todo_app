import loadPage from './modules/initial-load';
import formActions from './modules/form';
import {
  addTask,
  Task,
  taskList,
  renderTaskList,
  addProject
} from './modules/todo';

init();

function init() {
  if (!localStorage.taskList) {
    loadPage();
  } else {
    let tasks = localStorage.getItem("taskList");
    tasks = JSON.parse(tasks);
    taskList = tasks
    loadPage();
    renderTaskList();
  }
}
