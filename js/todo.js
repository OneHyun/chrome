const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const parentli = event.target.parentElement;
    parentli.remove();

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(parentli.id));
    saveToDos();
}

function paintToDo(newTodo)
{
    const toDoItem = document.createElement("li");
    toDoItem.id = newTodo.id;
    const toDoText = document.createElement("span");
    toDoText.innerText = newTodo.text;
    const toDoDelBtn = document.createElement("button");
    toDoDelBtn.innerText = "❌";
    toDoDelBtn.addEventListener("click", deleteToDo);

    toDoItem.appendChild(toDoText);
    toDoItem.appendChild(toDoDelBtn);

    toDoList.appendChild(toDoItem);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}