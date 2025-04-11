console.log("Math randome type shjt");
let rand=Math.random();
if(rand < 0.5){
    console.log("Ur numb is less than 0.5");
}
else{
    console.log("Ur numb is bigger than 0.5")
}
console.log(rand);

if(rand > 0.5){
    console.log("Ur numb is bigger than 0.5");
    console.log(rand);
}
// ---------------------------------------------------------------------

const dayOfWeek = prompt("ghi ngay");
if (dayOfWeek == "Monday") {
    console.log("I HATE MONDAY")
} else if (dayOfWeek == "Saturday") {
    console.log("YAY i love SATURDAY")
} else if (dayOfWeek == "Friday") {
    console.log("Friday time to party")
}else{
console.log("meh")
}

// ---------------------------------------------------------------------

const age =prompt("Write ur age here");
if(age<5){
    console.log("You are a child so Free")
} else if (age <10){
    console.log("You are a grown boy so 10$ pls")
}else if (age <65){
    console.log("You are a adult so 20$ pls")
}else {
    console.log("You are a senior $10 ok")
}


// ---------------------------------------------------------------------

const password = prompt("Please enter your password");
// must be 6+ characters
if(password.length>=6){
    if(password.indexOf(" ")===-1){
        console.log("Valid Password")
    }
    else{
        console.log("Password cannot contain spaces!")
    }
}
else{
    console.log("Password to short! Must be 6+ characters")
}
// Password cannot include space


// ---------------------------------------------------------------------
// Change the value of num, so that "YOU GOT ME!" prints out
const num = 0; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please)//
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}