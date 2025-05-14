const userInput = prompt("Enter Password")
if (userInput) {
    console.log("Truthy")
} else {
    console.log("Falsesy")
}


// 0 cũng có giá trị false tương tự như: undefined,NaN,null," " ==> (string rỗng)
if (0) {    
    console.log("Truthy")
} else {
    console.log("Falsesy")
}



const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
console.log(itCompanies[i]);