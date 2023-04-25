// -- array --
// const days_of_week=["mon","tue","wed","thu","fri","sat"];

// // Get Item from Aray
// console.log(days_of_week);

// //Add one more day to the array
// days_of_week.push("sun");


// // Get Item from Aray
// console.log(days_of_week);

// const toBuy=["potato","tomato","pizza"];
// toBuy.push("kimbab");
// console.log(toBuy[2]);
// console.log(toBuy[5555555]);

// --object--
// const playerName="chanho"
// const playerPoints=1212121;
// const plauerHandsome=false;
// const playerFat="little bit";

// player.name
// player.points
// ...

// player[0] == name
// player[1] == points
// const player=["chanho",12121212,false,"litle bit"];

// object - 안에서 = 사용 안 함
const player={
    name:"chanho",
    points: 120,
    handsome: false,
    fat:"little bit",
};

console.log(player);
console.log(player.name);
console.log(player["name"]);
player.name;

console.log(player);
player.handsome=true;
player.lastName="Jung";
player.points=player.points+15;
console.log(player);