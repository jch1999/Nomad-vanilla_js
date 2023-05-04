const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  console.log(username);
  // console.log(event);
  // greeting.innerText = 'Hello ' + username;
  // ` ` 안에 있을 때만 ${변수명}으로 문자열 붙이기가 가능하다.
  // `는 esc 밑에 있는 버튼이다. 백틱이라 한다.
  greeting.innerText = `Hello ${username} keep going!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  console.dir(event.composedPath());
  alert("clicke");
}

loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener("click", handleLinkClick);
