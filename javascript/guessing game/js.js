let maximum = parseInt(prompt("Enter the maximum number!"));


while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

let targetNum  = Math.floor(Math.random() * maximum) + 1;




console.log(targetNum);
// while(!maximum)  {
//     console.log("Invalid number! Please try again!");
// }

