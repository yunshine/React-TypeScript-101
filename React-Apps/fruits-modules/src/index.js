// import React, { Component } from "react";
import foods from "./foods";
import { choice, remove } from "./helpers";


// Randomly draw a fruit from the array
let randomChoice = choice(foods);

// Log the message “I’d like one RANDOMFRUIT, please.”
console.log(`I'd like one ${randomChoice}, please.`);

// Log the message “Here you go: RANDOMFRUIT”
console.log(`Here you go: ${randomChoice}`);

// Log the message “Delicious! May I have another?”
console.log("Delicious! May I have another?");

// Remove the fruit from the array of fruits
let remainingFood = remove(foods, randomChoice);

// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(`I'm sorry, we're all out. But, we have ${remainingFood.length} other foods left`);
