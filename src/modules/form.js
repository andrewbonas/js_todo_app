import {
  addTask,
  Task,
  taskList,
  renderTaskList,
  addProject
} from '../modules/todo';
import {
  loadPage,
  folderActivation
} from '../modules/initial-load';

const main = document.getElementById('main');

function formActions() {
  window.openForm = function() {
    document.getElementById("form-container").style.display = "block";
  }
  
  window.openFolderForm = function() {
    document.getElementById("folder-form-container").style.display = "block";
  }

  window.closeForm = function() {
    document.getElementById("form-container").style.display = "none";
    document.getElementById("folder-form-container").style.display = "none";
  }

  window.submitForm = function() {
    clickedSubmitForm();
  }

  function clickedSubmitForm() {
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let description = document.getElementById('description').value;
    let folderBtn = document.querySelector('.active');
    let folder = folderBtn.dataset.title;
    let complete = false;
    if (title == "" || date == "" || description == "") {
      alert('Please fill TODO correctly.');
    } else {
      addTask(folder, title, date, description, complete);
      main.querySelectorAll('.card').forEach(e => e.remove());
      renderTaskList();
      closeForm();
      form.reset();
    }
  }

  window.newFolder = function() {
    let name = document.getElementById('new-folder').value;
    let folderForm = document.getElementById('folder-form');
    if (name == "") {
      alert('Please add a folder name.');
    } else if (matchingFolderNames(name) == true) {
      alert('Folder names must be unique.');
    } else {
      addProject(name);
      closeForm();
      folderForm.reset();
    }
  }
}

function matchingFolderNames(name) {
  const sideBar = document.getElementById('side-bar');
  let folders = sideBar.querySelectorAll('.folder');
  let i;
  for (i = 0; i < folders.length; i++) {
    let currentCard = folders[i];
    if (currentCard.dataset.title === name) {
      return true;
    }
  }
}


export default formActions();
