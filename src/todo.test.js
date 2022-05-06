const addTask = require('./todo');
import populate from './todo';

describe('ToDoList', function () {
  let toDoList;
  beforeEach(() => {
    // toDoList = new addTask();
    document.body.innerHTML = '  <ul id="list"></ul>';
    localStorage.clear();
  });
  test('should add a new task to the list', function () {
    // addTask('test');
    document.querySelector('#to-do-list').innerHTML = toDoList.populate();
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});
