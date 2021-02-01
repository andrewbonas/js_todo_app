let projects = [];

let taskList = [];

function Project(name) {
  this.name = name;
  var project = this;
  this.Task = function Task(title, date, description) {
    this.Project = project;
  }
}

function addProject(name) {
  let addNewProject = new Project(name);
  project.push(addNewProject);
  console.log(projects);
}


function Task(title, date, description) {
  this.title = title;
  this.date = date;
  this.description = description;
}

function addTask(title, date, description) {
  let addNewTask = new Task(title, date, description);
  taskList.push(addNewTask);
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
