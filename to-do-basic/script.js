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
        <li>
          <div class='listItemLeft'>
            <input type='checkbox' id=${index} class='checkbox' ${
        item.completed ? 'checked' : ''
      } />
            <label>${index + 1}. ${item.task}</label>
          </div>
          <i class="far fa-minus-square"></i>
        </>
      </div>`
    );
  });
}

displayItems();

function toggleItemCompletion(e) {
  if (e.target.matches('input')) {
    listItems[e.target.id].completed = !listItems[e.target.id].completed;
    console.log(listItems[e.target.id], e.target);
  }
}
list.addEventListener('click', toggleItemCompletion);

// ${item.completed ? 'completed' : 'incomplete'}
