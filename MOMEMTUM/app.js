const loginForm=document.getElementById("login-form");
//if I use id, upon code should be 
//const loginForm=document.getElenetByID("login-from");
//id should be started with #, but js already know we use id. so we don't need to
//# in getElementById
const loginInput=loginForm.querySelector("input");
const loginButton=loginForm.querySelector("button");
// const loginInput=document.querySelector("#login-input input");
// const loginButton=document.querySelector("#login-input button");

let login;
function handleLoginButtonClick(){
    login=loginInput.value;
    console.log(loginInput.value);
    console.log(login);
    // console.log("clicked!");
}

loginButton.addEventListener("click",handleLoginButtonClick);