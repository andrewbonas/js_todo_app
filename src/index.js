import loadPage from './modules/initial-load';

init();

function openForm() {
  document.getElementById("form-container").style.display = "block";
}

function closeForm() {
  document.getElementById("form-container").style.display = "none";
}

function init() {
  loadPage();
}
