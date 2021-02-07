import {
  addTask,
  Task,
  taskList,
  renderTaskList,
  addProject,
  folderActivation,
  deleteProjectBtn
} from '../modules/todo';

function createSidebar() {
  const div = document.getElementById('side-bar');
  const folder = document.createElement('a');
  const folder1 = document.createElement('a');
  exampleFolder(div, folder);
  newFolderBtn(div);
  renderFolders();
  return div;
}

function exampleFolder(div, folder) {
  const linkText = document.createTextNode('example');
  folder.appendChild(linkText);
  folder.setAttribute("data-title", "example");
  folder.classList.add("folder");
  folder.classList.add("active");
  deleteProjectBtn(linkText, folder)
  div.appendChild(folder);
}

function newFolderBtn(div) {
  const btnCtn = document.createElement('div');
  const btn = document.createElement('button');
  btnCtn.classList.add('button-container');
  btn.classList.add('folder-add');
  btn.innerHTML = `<span>New Folder</span>`;
  btn.addEventListener('click', openFolderForm);
  btnCtn.appendChild(btn);
  div.appendChild(btnCtn);

}

function renderFolders() {
  taskList.forEach(function(Task) {
    let folder = Task[Object.keys(Task)[0]];
    if (folder != "example") {
      addProject(folder);
    }
  });
}

function createForm() {
  const form = document.createElement('div');
  form.setAttribute("id", "form-container")
  form.innerHTML = `
  <form id="form">
  <h1 class='d-flex justify-content-center pt-2'>TODO</h1>

    <div class="form-group p-2">
      <label for="title">Title:</label>
      <input id="title" type="text" class="form-control" placeholder="name" name="title" value="" required/>
    </div>

    <div class="form-group p-2">
      <label for="date-input">Date:</label>
      <input id="date" type="date" class="form-control" placeholder="01-01-2020" name="date" value="2021-01-01" required/>
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

  folderActivation();

}

export default loadPage;
