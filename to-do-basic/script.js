let listItems = [
  { task: 'Finish App', completed: false },
  { task: 'Study Japanese', completed: false },
  { task: 'Wash Dishes', completed: true },
  { task: 'Cook Dinner', completed: false },
  { task: 'Pray', completed: true },
  { task: 'Read Bible', completed: true },
];

const list = document.querySelector('ul');

function displayItems() {
  listItems.forEach((item, index) => {
    list.insertAdjacentHTML(
      'beforeend',
      `<div class='listItem'>
      <div class='listItemLeft'>
      <input type='checkbox' id=${index} class='checkbox' ${
        item.completed ? 'checked' : ''
      } />
      <li>${index + 1}. ${item.task}</li>
      </div>
      <i class="far fa-minus-square"></i>
      </div>`
    );
  });
}

displayItems();

function toggleItemCompletion(e) {
  console.log(e.target);
  console.log(listItems);
  if (e.target.matches('input')) {
    console.log(e.target.id);
    listItems[e.target.id].completed = !listItems[e.target.id].completed;
    console.log(listItems);
  }
}
list.addEventListener('click', toggleItemCompletion);
