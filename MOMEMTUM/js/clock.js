const clock = document.querySelector("h2#clock");
// const clock=document.querySelector("#clock");
// const clock=document.getElementById("#clock");

function getClock() {
  const date = new Date();
  // const hour=date.getHours().toString().padStart(2,"0");
  // const minute=date.getMinutes().toString().padStart(2,"0");
  // const second=date.getSeconds().toString().padStart(2,"0");
  const hour=String(date.getHours()).padStart(2,"0");
  const minute=String(date.getMinutes()).padStart(2,"0");
  const second=String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hour}:${minute}:${second}`;
}

// setInterval(sayHello, 5000);

getClock();
setInterval(getClock, 1000);