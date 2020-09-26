let listItems = [
  { task: 'Finish App', completed: false },
  { task: 'Study Japanese', completed: false },
  { task: 'Wash Dishes', completed: false },
];

const list = document.querySelector('ul');

list.style.color = 'red';
// list.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');

listItems.forEach((item) => {
  console.log(item);
  // list.innerHTML = `<li>${item.task}</li>`;
  list.insertAdjacentHTML(
    'beforeend',
    `<div class='listItem'>
      <div class='listItemLeft'>
        <input type='checkbox' />
        <li>${item.task}</li>
      </div>
      <i class="far fa-minus-square"></i>
      </div>`
  );
});
