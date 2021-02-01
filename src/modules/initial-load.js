import {addTask, Task, taskList,
  addProject,
  projects,
  Project,} from '../modules/todo';

function createSidebar() {
  const div = document.createElement('div');
  div.classList.add('side-bar');

  const folder = document.createElement('a');
  const linkText = document.createTextNode('project');
  folder.appendChild(linkText);
  folder.title = "project";
  folder.href = '#';
  div.appendChild(folder);
  const btn = document.createElement('button');
  btn.classList.add('folder-add');
  btn.innerHTML = `<span>New Folder</span>`;
  btn.addEventListener('click', openFolderForm);
  div.appendChild(btn);
  return div;
}

function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  main.setAttribute("id", "main");
  main.innerHTML = `<h1> test </h1>`;
  return main;
}

function createForm() {
  const form = document.createElement('div');
  form.setAttribute("id", "form-container")
  form.innerHTML = `
  <form id="form">
  <h1 class='d-flex justify-content-center pt-2'>New TODO</h1>

    <div class="form-group p-2">
      <label for="title">Title:</label>
      <input id="title" type="text" class="form-control" placeholder="name" name="title" value="" required/>
    </div>

    <div class="form-group p-2">
      <label for="date-input">Date:</label>
      <input id="date" type="date" class="form-control" placeholder="01-01-2020" name="date" value="" required/>
    </div>

    <div class="form-group p-2">
      <label for="textarea">Description:</label>
      <textarea id="description" class="form-control" placeholder="Details" name="date" value=""></textarea>
    </div>

    <div class="button w-100 d-flex justify-content-center pb-2">
     <button class="add-btn btn btn-primary m-2" type="button" form="form" onclick="submitForm()">Add</button>
     <button class="cancel-btn btn btn-secondary m-2" type="button" onclick="closeForm()">Close</button>
   </div>
  </form>
  `
  return form;
}

function createFolderForm() {
  const form = document.createElement('div');
  form.setAttribute("id", "folder-form-container")
  form.innerHTML = `
  <form id="folder-form">
  <h1 class='d-flex justify-content-center pt-2'>New Folder</h1>

    <div class="form-group p-2">
      <label for="new-folder">Name:</label>
      <input id="new-folder" type="text" class="form-control" placeholder="name" name="new-folder" value="" required/>
    </div>
    <div class="button w-100 d-flex justify-content-center pb-2">
     <button class="add-btn btn btn-primary m-2" type="button" form="form" onclick="newFolder()">Add</button>
     <button class="cancel-btn btn btn-secondary m-2" type="button" onclick="closeForm()">Close</button>
   </div>
  </form>
  `
  return form;
}

function createFormButton() {
  const btnDiv = document.createElement('div');
  btnDiv.classList.add('btn-div');
  btnDiv.innerHTML = `<button class="new-task-btn" onclick="openForm()"><i class="fas fa-plus fa-lg"></i></button>`
  return btnDiv;
}

function loadPage() {
  const content = document.getElementById('content');
  const main = document.getElementById('main');

  const sideBar = createSidebar();
  content.appendChild(sideBar);

  const form = createForm();
  content.appendChild(form);

  const folderForm = createFolderForm();
  content.appendChild(folderForm);

  const btn = createFormButton();
  main.appendChild(btn);

if (taskList.length > 0 ) {

}

}

export default loadPage;
