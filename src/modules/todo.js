let taskList = [];

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
      console.log(Task);
      console.log('whwh');
      let taskCard = document.createElement('div');
      taskCard.classList.add('card');
      taskCard.innerHTML = `
      <div class= "card-header">
      <strong>Title</strong><br>${Task.title}
      </div>
      <div class="card-body">
      <strong>Description</strong><br>${Task.description}
      </div>
      <div class="card-footer">
      ${Task.date}
          </div>
        `
      main.prepend(taskCard);
    });
  } else {
    console.log('ww');
    let taskCard = document.createElement('div');
    taskCard.classList.add('card');
    return taskCard;
  }
}

export {
  addTask,
  Task,
  taskList,
  renderTaskList
};
