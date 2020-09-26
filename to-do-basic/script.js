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
  listItems.forEach((item) => {
    list.insertAdjacentHTML(
      'beforeend',
      `<div class='listItem'>
      <div class='listItemLeft'>
      <input type='checkbox' class='checkbox' ${
        item.completed ? 'checked' : ''
      } />
      <li>${item.task}</li>
      </div>
      <i class="far fa-minus-square"></i>
      </div>`
    );
  });
}

displayItems();

function toggleItemCompletion(e) {
  console.log(e.target);
}
list.addEventListener('click', toggleItemCompletion);
