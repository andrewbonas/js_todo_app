import loadPage from './modules/initial-load';
import {  addTask,
  Task,
  taskList,
  renderTaskList,
  addProject,
  projects,
  Project} from './modules/todo';
import formActions from './modules/form';

function test() {
  let folderContainer = document.getElementById("side-bar");
let folders = folderContainer.getElementsByClassName("folder");
for (var i = 0; i < folders.length; i++) {
  folders[i].addEventListener("click", function() {
    console.log('hi');
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}

init();
test();
function init() {
  loadPage();
}
