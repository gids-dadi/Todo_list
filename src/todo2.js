import populate from './todo.js';

export default function cleanListener() {
  const clearBtn = document.querySelector('.clear-text');
  clearBtn.addEventListener('click', () => {
    let listContainer = JSON.parse(localStorage.getItem('container'));
    listContainer = listContainer.filter((item) => item.completed === false);
    localStorage.setItem('container', JSON.stringify(listContainer));
    populate();
  });
}
