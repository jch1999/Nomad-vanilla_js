const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos=[];

function saveToDos(){
  // localStorage.setItem("toDos",toDos);
  localStorage.setItem("toDos",JSON.stringify(toDos));
}

function deleteToDo(event){
  // console.log(event.target.parentElement);
  // console.dir(event.target.parentElement.innerText);
  // console.log(event.composedPath());
  
  // document.removeChild(event.);

  const li=event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo){
  // console.log("I will paint "+newToDo);
  const li=document.createElement("li");
  const span=document.createElement("span");
  span.innerText=newToDo;
  const button=document.createElement("button");
  button.innerText="❌";
  button.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  // console.log(li);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(toDoInput.value);
  const newToDo = toDoInput.value;
  // console.log(newToDo);
  toDoInput.value = "";
  // console.log(newToDo);
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);