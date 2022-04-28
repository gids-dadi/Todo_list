import _ from 'lodash';
import './style.css';

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

function populate() {
    const listDisplay = document.querySelector('.todo-list');

}



/*
function populate() {
  const listDisplay = document.querySelector('.todo-list');

  // sort the list based on their index number.
  listContainer = listContainer.sort((a, b) => a.index - b.index);
  const header = document.createElement('li');
  const headerIcon = document.createElement('i');
  const add = document.createElement('li');
  const addIcon = document.createElement('i');
  headerIcon.classList.add('fa-solid', 'fa-rotate');
  addIcon.classList.add('fa-solid', 'fa-angle-left');
  header.classList.add('header');
  add.classList.add('add-text');
  header.textContent = "Today's To Do";
  add.textContent = 'Add to your list...';
  header.appendChild(headerIcon);
  add.appendChild(addIcon);
  listDisplay.append(header, add);

  // Iterate through the loop and populate the html file.
  listContainer.forEach((item) => {
    const list = document.createElement('li');
    const text = document.createElement('p');
    const box = document.createElement('i');
    const menu = document.createElement('i');
    text.textContent = item.description;
    menu.classList.add('menu-icon', 'fa-solid', 'fa-ellipsis-vertical');
    box.classList.add('fa-regular', 'fa-square');
    list.append(box, text, menu);
    listDisplay.appendChild(list);
  });
  const clear = document.createElement('li');
  clear.classList.add('clear-text');
  clear.textContent = 'Clear all completed';
  listDisplay.appendChild(clear);
}

populate();


// for (let i = 0; i < speakers.length; i += 1) {
//   document.querySelector('.speakers-list').innerHTML += `

// <div class='speaker'>

// <div  class = 'speaker-image' > 
// <img src = ${speakers[i].image} />
// </div>

//   <div class="speaker-text">
//   <h2>${speakers[i].name}</h2>
//     <p class='text-danger'>${speakers[i].position}</p>
//     <p>${speakers[i].brief}</p>
// </div>
// </div>`;
// }

*/
