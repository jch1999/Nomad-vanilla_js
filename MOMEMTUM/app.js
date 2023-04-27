const age=parseInt(prompt("How old are ypu?"));
// console.log(isNaN(age));

// if(condition){
//     //conditino == true
// } else {
//   //condition == false
// }

if(isNaN(age)||age<0) {
  console.log("Please write a real positive number");
}else if(age<18) {
  console.log("You are too young.")
}else if(age>=18&&age<=50) {
  console.log("You can drink.");
}else if(age>50&&age<=80){
  console.log("You should exercise.");
}else if(age>=80){
  console.log("You can do whateveryou want.");
}