import loadPage from './modules/initial-load';
import {addTask, Task, taskList} from './modules/todo';


init();

window.openForm = function() {
  document.getElementById("form-container").style.display = "block";
}
window.closeForm = function() {
  document.getElementById("form-container").style.display = "none";
}

window.submitForm = function() {
  let title = document.getElementById('title').value;
 let date = document.getElementById('date').value;
 let description = document.getElementById('description').value;

if (title == "" || date == "" || description == "") {
  alert('Please fill TODO correctly');
} else {
  addTask(title, date, description);
  closeForm();
  form.reset();
}
}

function init() {
  loadPage();
}
