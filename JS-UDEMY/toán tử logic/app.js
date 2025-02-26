// const password = prompt("Nhap mat khau cua ban");

//     if(password.length>=6 && password.indexOf(" ")===-1){
//     console.log("Valid password!")
//     } else{
//         console.log("Too short!Your passord is not valid")
//     }

//----------------------------------------------------------------------------

// const mystery = 'Prototype87'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE


// LEAVE THIS CODE ALONE! (pretty please)
// if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
//     console.log("YOU GOT IT!!!");
// }


//0-5 free
//5-10 10$
//10-65 20$
//65+ free

// const age = 10; // nếu để tuổi là 1 string rỗng " " thì giá trị sẽ là 0 tương tự như: null,false.(còn undetified và NaN sẽ thuộc trg hợp else)
// if(age>=0 && age<5 || age>=65){
//     console.log("Free")
// } else if(age>=5 && age<10){
//     console.log("10")
// }else if(age>=10 && age<65){
//     console.log("20")
// }else{
//     console.log("Invalid age")
// }
//note: &&(và) sẽ được ưu tiên chạy trc ||(hoặc) 

//-------------------------------------------------------
//Toán tử ! (not) sẽ đưa giá trị từ false thành true, và true sẽ thành false
// const firstName = prompt ("enter ur first name");
// if(!firstName){
//     firstName = prompt("Please try again!!!")
// }


// const age = prompt("nhaptuoi cua ban"); 
// if(!(age>=0 && age<5 || age>=65)){
//     console.log("Free")
// }