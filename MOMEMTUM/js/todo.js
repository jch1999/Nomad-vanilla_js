const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY="toDos";

const toDos=[];

function saveToDos(){
  localStorage.setItem("toDos",JSON.stringify(toDos));
}

function deleteToDo(event){
  const li=event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo){
  const li=document.createElement("li");
  const span=document.createElement("span");
  span.innerText=newToDo;
  const button=document.createElement("button");
  button.innerText="❌";
  button.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
  console.log("this is turn of a "+item);
}
const savedToDos=localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos){
  const parsedToDos=JSON.parse(savedToDos);
  // console.log(parsedToDos);
  parsedToDos.forEach(sayHello);//함수에 각 요소 전달함.
  // parsedToDos.forEach((item)=>console.log("this is turn of a "+item));//람다식?
}