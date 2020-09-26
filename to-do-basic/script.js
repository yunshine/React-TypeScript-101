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
  list.insertAdjacentHTML('beforeend', `<li>${item.task}</li>`);
});
