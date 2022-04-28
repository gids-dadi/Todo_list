import './style.css';
import deleteImage from './menu.svg';

const todoTasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'complete todo list project',
    completed: true,
    index: 2,
  },
];

// var elem = document. createElement("hr");
// elem. setAttribute("width", "100px");
// document. body. appendChild(elem);

function populate() {
  const listTodo = document.querySelector('.todo-list');
  todoTasks.forEach((todo) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const checkBox = document.createElement('input');
    const menuIcon = document.createElement('img');
    const line = document.createElement('hr');
    const p = document.createElement('p');
    p.innerHTML = todo.description;
    checkBox.setAttribute('type', 'checkbox');
    menuIcon.setAttribute('src', `${deleteImage}`);
    line.setAttribute('width', '100%');
    li.appendChild(checkBox);
    div.appendChild(p);
    div.appendChild(menuIcon);
    li.appendChild(div);
    listTodo.appendChild(line);
    listTodo.appendChild(li);
  });
}
populate();
