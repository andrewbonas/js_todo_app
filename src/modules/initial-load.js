function createSidebar() {
  const div = document.createElement('div');
  div.classList.add('side-bar');
  const folder = document.createElement('a');
  const linkText = document.createTextNode('project');
  folder.appendChild(linkText);
  folder.title = "project";
  folder.href = '#';
  div.appendChild(folder);
  return div;
}

function loadPage() {
  const content = document.getElementById('content');

  const sideBar = createSidebar();
  content.appendChild(sideBar);

}

export default loadPage;
