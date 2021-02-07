import loadPage from './modules/initial-load';
import formActions from './modules/form';
import {
  format
} from 'date-fns';
import {
  addTask,
  Task,
  taskList,
  renderTaskList,
  addProject
} from './modules/todo';

init();

(function currentDate() {
  const today = new Date();
  const formattedDate = format(today, 'PPPP');
  document.querySelector('h1 > span').textContent = formattedDate;
})();

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
