import loadPage from '../modules/initial-load';

let projects = [];

let taskList = [];

const sideBar = document.getElementById('side-bar');


function Project(name) {
  this.name = name;
  var project = this;
  this.Task = function Task(title, date, description) {
    this.Project = project;
  }
  console.log(Project);
}


function addProject(name) {
  let newFolder = document.createElement('button');
  newFolder.innerHTML = `${name}`;
  newFolder.classList.add("folder");
  sideBar.prepend(newFolder);

  let addNewProject = new Project(name);
  projects.push(addNewProject);

}

function Task(folder, title, date, description) {
  this.folder = folder;
  this.title = title;
  this.date = date;
  this.description = description;
}

function addTask(folder, title, date, description) {
  let addNewTask = new Task(folder, title, date, description);
  taskList.push(addNewTask);
  console.log(taskList);
}

function renderTaskList() {

  if (taskList.length > 0) {
    taskList.forEach((Task) => {
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
          </div>
        `
      main.prepend(taskCard);
    });
  } else {
    let taskCard = document.createElement('div');
    taskCard.classList.add('card');
    return taskCard;
  }
}

export {
  addTask,
  Task,
  taskList,
  renderTaskList,
  addProject,
  projects,
  Project,
};
