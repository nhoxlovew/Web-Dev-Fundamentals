// for (let i = 1; i <= 10; i++) {
//     console.log("Hello:", i)
// }


// const animal = ['lions','tigers','bears']

// console.log(animal.length)

// for (let i = 0;i<animal.length;i++){
//     console.log(i+",",animal[i].toUpperCase())
// }



//// nested loops

// for(let i = 0;i<=10;i++){
//     console.log(`i is: ${i}`)
//     for(let j = 1; j<=3;j++){
//         console.log(`      j is: ${j}`)
//     }
// }


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]
    console.log(`Row: ${i}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

//or

for (let row of seatingChart) { // for of loop
    for (let student of row) {
        console.log(student)
    }
}


// seatingChart.map((row)=>{
//     console.log(row)
//     row.map((student)=>{
//         console.log(student)
//     })
// })