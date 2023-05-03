const loginForm = document.getElementById("login-form");
//if I use id, upon code should be 
//const loginForm=document.getElenetByID("login-from");
//id should be started with #, but js already know we use id. so we don't need to
//# in getElementById
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// const loginInput=document.querySelector("#login-input input");
// const loginButton=document.querySelector("#login-input button");

let login;
function handleLoginButtonClick() {
  const username = loginInput.value;
  // if (username == "") {
  //   alert("Please write your name");
  // } else if (username.length > 15) {
  //   alert("Your name is too long.")
  // } else {
  //   console.log(username);
  // }
  console.log(username);
  // console.log("clicked!");
}

loginButton.addEventListener("click", handleLoginButtonClick);