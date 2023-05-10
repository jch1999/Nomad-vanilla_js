const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(toDoInput.value);
  const newToDo = toDoInput.value;
  console.log(newToDo);
  toDoInput.value = "";
  console.log(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);