// function sayHello(nameOfPerson,age) {
//   console.log("Hello my name is "+nameOfPerson+" and I'm "+age+" yeasr old.");
// }

// alert();
// console.log();
// sayHello("Chanho",25);
// sayHello("Nico",10);
// sayHello("Mary",12);
// sayHello("IB",12);
// sayHello("Garry",24);

// function plus (firstNumber,secondNumber)
// {
//     console.log(firstNumber+secondNumber);
// }
// // console.log(firstNumber);
// function divide(a,b)
// {
//     console.log(a/b);
// }

// // plus();
// plus(2,5);
// divide(98,20);

const player={
    name: "chanho",
    sayHello:function(otherPersonsName)
    {
        console.log("Hello "+otherPersonsName);
    }
};

console.log(player.name);
player.sayHello("Mary");