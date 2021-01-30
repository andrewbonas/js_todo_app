let taskList = [];

function Task(title, date, description) {
  this.title = title;
  this.date = date;
  this.description = description;
}

function addTask(title, date, description) {

let addNewTask = new Task(title, date, description);
  taskList.push(addNewTask);
  console.log(taskList);
}

export  {addTask, Task, taskList};
