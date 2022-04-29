let listContainer = [];

class Task {
  constructor(disc) {
    this.index = 0;
    this.completed = false;
    this.description = disc;
  }
}
export default function populate() {
  const storedItems = JSON.parse(localStorage.getItem('container'));
  if (storedItems !== null) {
    listContainer = storedItems;
  }

  function addTask(taskInput) {
    const newTask = new Task(taskInput);
    listContainer.push(newTask);
    localStorage.setItem('container', JSON.stringify(listContainer));
    populate();
  }

  function addListener() {
    const textField = document.querySelector('.add-text');

    textField.addEventListener('keypress', (e) => {
      const textValue = document.getElementById('add-text');
      const taskInput = textValue.value;
      if (e.keyCode === 13 && taskInput !== '') {
        addTask(taskInput);
      }
    });
  }

  function deleteTask(id) {
    listContainer = listContainer.filter((item) => item.index !== id);
    localStorage.setItem('container', JSON.stringify(listContainer));
    populate();
  }

  const listDisplay = document.querySelector('.screen');

  function menuListener() {
    listContainer.forEach((item) => {
      const taskView = document.querySelector(`.task${item.index}`);
      const menuBtn = document.querySelector(`.menu-icon${item.index}`);
      const taskDisc = document.querySelector(`.task-name${item.index}`);
      const checkBox = document.querySelector(`.check-box${item.index}`);
      const taskName = taskDisc.innerHTML;

      checkBox.addEventListener('click', () => {
        checkBox.classList.toggle('fa-square');
        checkBox.classList.toggle('fa-square-check');
        listContainer[item.index].completed =
          !listContainer[item.index].completed;
        localStorage.setItem('container', JSON.stringify(listContainer));
      });
      menuBtn.addEventListener('click', () => {
        deleteTask(item.index);
      });
      taskView.addEventListener('mouseenter', () => {
        if (menuBtn.classList.contains('delete-icon')) {
          menuBtn.classList.add(
            'menu-icon',
            'fa-ellipsis-vertical',
            `menu-icon${item.index}`
          );
          menuBtn.classList.remove(
            'delete-icon',
            `delete-icon${item.index}`,
            'fa-trash-can'
          );
        } else {
          taskDisc.setAttribute('contenteditable', true);
          taskDisc.classList.add('yellowish');
          menuBtn.classList.remove(
            'menu-icon',
            'fa-ellipsis-vertical',
            `menu-icon${item.index}`
          );
          menuBtn.classList.add(
            'delete-icon',
            `delete-icon${item.index}`,
            'fa-trash-can'
          );
        }
      });
      taskView.addEventListener('mouseleave', () => {
        const newName = taskDisc.innerHTML;
        if (taskName !== newName) {
          listContainer[item.index].description = newName;
          localStorage.setItem('container', JSON.stringify(listContainer));
        }
        taskDisc.classList.remove('yellowish');
        taskDisc.setAttribute('contenteditable', false);
        menuBtn.classList.add(
          'menu-icon',
          'fa-ellipsis-vertical',
          `menu-icon${item.index}`
        );
        menuBtn.classList.remove(
          'delete-icon',
          `delete-icon${item.index}`,
          'fa-trash-can'
        );
      });
      // Prevent the Enter key from working while editing the task discriptions.
      taskDisc.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
        }
      });
    });
  }

  // function addTask(taskInput) {
  //   const newTask = new Task(taskInput);
  //   listContainer.push(newTask);
  //   localStorage.setItem('container', JSON.stringify(listContainer));
  //   populate();
  // }

  // function addListener() {
  //   const textField = document.querySelector('.add-text');

  //   textField.addEventListener('keypress', (e) => {
  //     const textValue = document.getElementById('add-text');
  //     const taskInput = textValue.value;
  //     if (e.keyCode === 13 && taskInput !== '') {
  //       addTask(taskInput);
  //     }
  //   });
  // }

  // function deleteTask(id) {
  //   listContainer = listContainer.filter((item) => item.index !== id);
  //   localStorage.setItem('container', JSON.stringify(listContainer));
  //   populate();
  // }

  // export default function populate() {
  //   const storedItems = JSON.parse(localStorage.getItem('container'));
  //   if (storedItems !== null) {
  //     listContainer = storedItems;
  //   }
  listDisplay.innerHTML = '';
  const ul = document.createElement('ul');
  ul.classList.add('list-holder');
  ul.innerHTML = `<li class="header">Today's To Do<i class="fa-solid fa-rotate"></i></li>
            <li>
                <input type="text" id="add-text" class="add-text" placeholder="
               Add to your list" required>
                <i class="fa-solid fa-angle-left"></i>
            </li>`;
  let itemNo = 0;
  listContainer.forEach((item) => {
    item.index = itemNo;
    let checked;
    if (item.completed) {
      checked = 'fa-square-check';
    } else {
      checked = 'fa-square';
    }
    const i = document.createElement('li');
    i.classList.add(`task${item.index}`);
    i.innerHTML = `<i class="check-box${item.index} fa-regular ${checked}"></i>
    <p class="task-name${item.index}">${item.description}</p>
    <i class="menu-icon${item.index} fa-solid fa-ellipsis-vertical menu-icon"></i>`;
    ul.append(i);
    itemNo += 1;
  });
  localStorage.setItem('container', JSON.stringify(listContainer));
  ul.innerHTML += '<li class="clear-text">Clear all completed</li>';
  listDisplay.appendChild(ul);
  addListener();
  menuListener();
}

// function addListener() {
//   const textField = document.querySelector('.add-text');

//   textField.addEventListener('keypress', (e) => {
//     const textValue = document.getElementById('add-text');
//     const taskInput = textValue.value;
//     if (e.keyCode === 13 && taskInput !== '') {
//       addTask(taskInput);
//     }
//   });
// }

// function addTask(taskInput) {
//   const newTask = new Task(taskInput);
//   listContainer.push(newTask);
//   localStorage.setItem('container', JSON.stringify(listContainer));
//   populate();
// }

// function deleteTask(id) {
//   listContainer = listContainer.filter((item) => item.index !== id);
//   localStorage.setItem('container', JSON.stringify(listContainer));
//   populate();
// }

window.onload = () => {
  populate();
};
