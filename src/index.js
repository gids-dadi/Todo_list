import './style.css';
import './add-remove.js';
import './clear.js';

// import deleteImage from './menu.svg';
// import { addTodo, deleteTodo, updateDescription, refreshPage } from './todo';
/*
// const listform = document.getElementById('todo');
const todoList = document.getElementById('todo-list');
const btn = document.querySelector('.btn');

document
  .querySelector('.header')
  .addEventListener('click', () => refreshPage());

const listform = document.getElementById('todo');
listform.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTodo(event.target.value);
    // todoList.innerHTML = listform.value;
  }
});

const todos = JSON.parse(localStorage.getItem('todos'))
  ? JSON.parse(localStorage.getItem('todos'))
  : [];

todos.forEach((todo) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  const checkBox = document.createElement('input');
  const moreIcon = document.createElement('img');
  const myContentWrapper = document.createElement('div');
  moreIcon.setAttribute('src', `${deleteImage}`);
  moreIcon.addEventListener('click', () => {
    deleteTodo(todo.index);
  });

  checkBox.setAttribute('type', 'checkbox');
  checkBox.checked = todo.completed;
  // listform.classList.add('todoinput');
  // listform.disabled = true;
  // listItem.addEventListener('click', () => {
  //   listform.disabled = false;
  // });
  listform.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      updateDescription(todo.index, e.target.value);
    }
  });

  listform.value = todo.description;
  myContentWrapper.appendChild(checkBox);
  myContentWrapper.appendChild(todoList);
  listItem.appendChild(myContentWrapper);
  listItem.appendChild(moreIcon);
  todoList.append(listItem);
});

btn.addEventListener('click', () => {
  deleteTodo(checkBox.checked);
});
*/
