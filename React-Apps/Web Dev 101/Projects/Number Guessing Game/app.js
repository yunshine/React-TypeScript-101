let num = Math.floor(Math.random() * 100) + 1;
let guess = prompt("Guess a number between 1-100");


while (parseInt(guess) != num) {
  if (parseInt(guess) < num) {
    guess = parseInt(prompt("Guess higher!"));
  } else {
    guess = parseInt(prompt("Guess lower!"));
    parseInt(guess);
  }
}

alert("You're so smart and pretty!");