const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;

  localStorage.setItem("username", username);

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
