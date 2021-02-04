import loadPage from './modules/initial-load';
import {  addTask,
  Task,
  taskList,
  renderTaskList,
  addProject} from './modules/todo';
import formActions from './modules/form';



init();


function init() {
  loadPage();
}
