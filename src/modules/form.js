import {
  addTask,
  Task,
  taskList,
  renderTaskList,
  addProject,
  projects,
  Project
} from '../modules/todo';
import loadPage from '../modules/initial-load';

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
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let description = document.getElementById('description').value;
    let folderBtn = document.querySelector('.active');
    let folder = folderBtn.dataset.title;
    if (title == "" || date == "" || description == "") {
      alert('Please fill TODO correctly');
    } else {
      addTask(folder,title, date, description);
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
      alert('Please add a folder name');
    } else {
      addProject(name);
      closeForm();
      folderForm.reset();
    }

  }
}

 function folders() {
  window.folderBtns = function() {
  let folders = document.getElementByClassName("folder");

  for (let i = 0; i < folders.length; i++) {
    folders[i].addEventListener("click", function() {
      let current = document.getElementByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

    });
  }
}
}

export default formActions();
