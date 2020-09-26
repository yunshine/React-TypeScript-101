let listItems = [
  { task: 'Finish App', completed: false },
  { task: 'Study Japanese', completed: false },
  { task: 'Wash Dishes', completed: true },
  { task: 'Cook Dinner', completed: false },
  { task: 'Pray', completed: true },
  { task: 'Read Bible', completed: true },
];

const list = document.querySelector('ul');
const checkboxes = document.querySelectorAll('.checkbox');

listItems.forEach((item) => {
  // console.log(item);
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

console.log(checkboxes);
checkboxes.forEach((checkbox) => {});
