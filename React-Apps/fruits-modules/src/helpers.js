function choice(items) {
// selects random item from array
  let choiceIndex = Math.floor(Math.random() * items.length);
return items[choiceIndex];
}

function remove(items, item) {
// removes first matching item from items, if the item exists, and returns it. Otherwise returns undefined.
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [ ...items.slice(0, i), ...items.slice(i + 1) ];
    }
  }
}

export { choice, remove };
