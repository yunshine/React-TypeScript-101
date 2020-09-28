// let listItems = [
//   { task: 'Finish App', completed: false },
//   { task: 'Study Japanese', completed: false },
//   { task: 'Wash Dishes', completed: true },
//   { task: 'Cook Dinner', completed: false },
//   { task: 'Pray', completed: true },
//   { task: 'Read Bible', completed: true },
// ];

// // let listItems = [];

// const list = document.querySelector('ul');
// const form = document.querySelector('form');
// const deleteButtons = document.querySelectorAll('i');

// function displayItems() {
//   listItems.forEach((item, index) => {
//     list.insertAdjacentHTML(
//       'beforeend',
//       `<div class='listItem'>
//         <li>
//           <div class='listItemLeft'>
//             <input type='checkbox' id=${index} class='checkbox' ${
//         item.completed ? 'checked' : ''
//       } />
//             <label for=${index}>${index + 1}. ${item.task}</label>
//           </div>
//           <i class="fas fa-trash" id=deleteIndex(${index})></i>
//         </>
//       </div>`
//     );
//   });
// }

// displayItems();

// function toggleItemCompletion(e) {
//   if (e.target.matches('i')) {
//     e.stopPropagation();
//     console.log(e.target, this);
//     console.log('current parent =', this.parentElement);
//   }

//   // if a checkbox is clicked on...
//   if (e.target.matches('input')) {
//     listItems[e.target.id].completed = !listItems[e.target.id].completed;
//     console.log(listItems[e.target.id], e.target);

//     // when the checkbox is clicked, how do I add a CSS class to the label associated with that checkbox???
//   }
//   // if(e.target)
// }

// function addItem(e) {
//   e.preventDefault();
//   const text = this.querySelector('[name=toDoItem]').value;
//   console.log(e.target.value);
//   console.log(text);
//   listItems.push({ task: `${text}`, completed: false });
//   console.log(listItems);
//   list.insertAdjacentHTML(
//     'beforeend',
//     `<div class='listItem'>
//       <li>
//         <div class='listItemLeft'>
//           <input type='checkbox' id=${listItems.length - 1} class='checkbox' />
//           <label for=${listItems.length - 1}>${
//       listItems.length
//     }. ${text}</label>
//         </div>
//         <i class="fas fa-trash" id=deleteIndex(${index})></i>
//       </>
//     </div>`
//   );
// }

// function deleteItem() {
//   console.log(e.target, this);
// }

// list.addEventListener('click', toggleItemCompletion);
// form.addEventListener('submit', addItem);

// // deleteButtons.forEach((button) => {
// //   button.addEventListener('click', deleteItem);
// // });

// // ${item.completed ? 'completed' : 'incomplete'}
