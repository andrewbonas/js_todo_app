import loadPage from './modules/initial-load';

init();




window.openForm = function() {
  document.getElementById("form-container").style.display = "block";
}
window.closeForm = function() {
  document.getElementById("form-container").style.display = "none";
}

function init() {

  loadPage();
}
