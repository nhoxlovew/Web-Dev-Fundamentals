let maximum = parseInt(prompt("Enter the maximum number!"));


while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum);

let guess = prompt("Enter your first guess! Type q to quit"); // bug here when quitting the game the parseInt will return NaN 
let attempts = 1;

while (parseInt(guess) !== targetNum) // so we parseInt the guess to make sure it's a number
{
    if (guess === 'q') break;

    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess!");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess!");
        attempts++;
    }else{
        guess = prompt("Invalid guess!");
    }
}

if (guess === 'q') {
    console.log("You quit the game!");
} else {
    console.log(`Congrats! It took you ${attempts} guessed!`);
}


