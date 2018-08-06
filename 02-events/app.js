const tree = document.getElementsByTagName('div')[0];

const treeBranch = tree.getElementsByTagName('div');

for (let i = 0; i < treeBranch.length; i++) {
  const div = treeBranch[i];
  const span = document.createElement('span');

  div.insertBefore(span, div.firstChild);
  span.appendChild(span.nextSibling);
  span.className = "tree__text";
}

const handleTreeItem = (event) => {
  const target = event.target;

  if (target.tagName != 'SPAN') {
    return;
  }

  if (event.ctrlKey) {
    toggleClass(target);
  }

  const childrenContainer = target.parentNode.getElementsByTagName('div');

  if(!childrenContainer) {
    return;
  }

  for(let i = 0; i < childrenContainer.length; i++) {
    const childrenDiv = childrenContainer[i];
    childrenDiv.hidden = !childrenDiv.hidden;
  }
}

const toggleClass = (span) => {
  span.classList.toggle('selected');
}

tree.addEventListener('click', handleTreeItem);