import loadPage from '../modules/initial-load';

let taskList = [];

const sideBar = document.getElementById('side-bar');
const main = document.getElementById('main');

function folderActivation() {
  let folderContainer = document.getElementById("side-bar");
  let folders = folderContainer.getElementsByClassName("folder");
  for (var i = 0; i < folders.length; i++) {
    folders[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
      main.querySelectorAll('.card').forEach(e => e.remove());
      renderTaskList();
    });
  }
}

function addProject(name) {
  let newFolder = document.createElement('a');
  newFolder.innerHTML = `${name}`;
  newFolder.classList.add("folder");
  newFolder.dataset.title = name;
  deleteProjectBtn(name, newFolder);
  sideBar.prepend(newFolder);
  folderActivation();
  setData();
}

function renderSidebar() {


}

function deleteProjectBtn(name, newFolder) {
  let projectDeleteBtn = document.createElement('span');
  projectDeleteBtn.classList.add('project-del-btn');
  projectDeleteBtn.textContent = 'x';
  newFolder.appendChild(projectDeleteBtn);
  projectDeleteBtn.addEventListener('click', (e) => {
    if (!confirm("Are you sure you want to delete this folder? All associated TODO's will be removed.")) {
      return
    } else {
      deleteProject(e, name);
    }
  });
}

function deleteProject(e, name) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].folder == name) {
      taskList.splice(i, 1);
    }
  }
  let rmv = e.target.parentElement;
  sideBar.removeChild(rmv);
  setData();
}

function Task(folder, title, date, description, complete) {
  this.folder = folder;
  this.title = title;
  this.date = date;
  this.description = description;
  this.complete = complete;
}

function addTask(folder, title, date, description, complete) {
  let addNewTask = new Task(folder, title, date, description, complete);
  taskList.push(addNewTask);
  setData();
}

function renderTaskList() {
  if (document.querySelector(".active") != null) {
    let renderfolder = document.querySelector(".active").dataset.title;
    if (taskList.length > 0) {
      taskList.forEach((Task) => {
        if (renderfolder === Task[Object.keys(Task)[0]]) {
          let taskCard = document.createElement('div');
          taskCard.classList.add('card');
          taskCard.innerHTML = `
      <div class= "card-header">
      <strong>Title:</strong><br>${Task.title}
      </div>
      <div class="card-body">
      <strong>Description:</strong><br>${Task.description}
      </div>
      <div class="card-footer">
    <strong>Date:</strong> ${Task.date}
          </div>`
          taskComplete(taskCard, Task);
          taskDelete(taskCard);
          main.prepend(taskCard);
        }
      });
    }
  }
}

function taskComplete(taskCard, Task) {
  let taskDeleteBtn = document.createElement('span');
  taskDeleteBtn.classList.add('task-complete-btn');
  taskDeleteBtn.textContent = 'e';
  taskCard.appendChild(taskDeleteBtn);
  taskDeleteBtn.addEventListener('click', (e) => {
    if (Task.complete === false) {
      Task.complete = true
      taskCard.style.textDecoration = "line-through"
      setData();
    } else {
      Task.complete = false
      taskCard.style.textDecoration = "none"
      setData();
    }
  });
}

function taskDelete(taskCard) {
  let taskDeleteBtn = document.createElement('span');
  taskDeleteBtn.classList.add('task-del-btn');
  taskDeleteBtn.textContent = 'x';
  taskCard.appendChild(taskDeleteBtn);
  taskDeleteBtn.addEventListener('click', (e) => {
    taskList.splice(taskList.indexOf(Task), 1);
    deleteTask(e);
  });
}

function deleteTask(e) {
  let rmv = e.target.parentElement;
  main.removeChild(rmv);
  setData();
}

function setData() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

export {
  addTask,
  Task,
  taskList,
  renderTaskList,
  addProject,
  folderActivation
};
