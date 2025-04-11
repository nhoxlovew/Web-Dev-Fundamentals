
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
let userInput = prompt("what would you like to do: ");


while (userInput !== 'q' && userInput !== 'quit') {

    if (userInput === 'list') {
        console.log("**********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");
    }

    else if (userInput === 'new') {
        const newtodo = prompt("Enter new todo: ");
        todos.push(newtodo);
        console.log(`${newtodo} added to the list`);
    }

    else if (userInput === 'delete') {
        const index = parseInt(prompt("Enter index of todo to delete: "));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`OK, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index");
        }
    }

    userInput = prompt("what would you like to do: ");
}


console.log("OK, YOU QUIT THE APP!");   
