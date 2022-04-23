const toDoList = document.querySelector(".todolist");
const toDoIncompleteList = document.querySelector(".incomplete-list");
const toDoCompleteList = document.querySelector(".complete-list");
const toDoOpenBtn = document.querySelector(".todolist-openbtn");
const toDoCloseBtn = document.querySelector(".todolist-closebtn");
const toDoAddBtn = document.querySelector(".todolist-addbtn");

const toDoForm = document.querySelector(".toDoForm");
const toDoInput = document.querySelector(".toDoInput");

const TODOS_KEY = "todos";
const TODOLIST_ONOFFKEY = "list-off";
const STATUSINCOMPLETE = "incomplete";
const STATUSCOMPLETE = "complete";
let toDos = [];

function listOpen(event) {
  if (event.path[0] === toDoOpenBtn) {
    toDoOpenBtn.classList.add(TODOLIST_ONOFFKEY);
    toDoList.classList.remove(TODOLIST_ONOFFKEY);
  } else {
    toDoOpenBtn.classList.remove(TODOLIST_ONOFFKEY);
    toDoList.classList.add(TODOLIST_ONOFFKEY);
  }
}
toDoOpenBtn.addEventListener("click", listOpen);
toDoCloseBtn.addEventListener("click", listOpen);

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const parentli = event.target.parentElement.parentElement;
  parentli.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(parentli.id));
  saveToDos();
}

function changeToDo(event) {
  const parentli = event.target.parentElement.parentElement;

  const test = toDos.find((toDo) => toDo.id === parseInt(parentli.id));
  console.log(test);
  if (test.status === STATUSINCOMPLETE) {
    test.status = STATUSCOMPLETE;
  } else {
    test.status = STATUSINCOMPLETE;
  }
  console.log(test);
  console.log(toDos);
  saveToDos();
  Update();
}

function paintToDo(newTodo) {
  const toDoItem = document.createElement("li");
  toDoItem.id = newTodo.id;
  const toDoText = document.createElement("span");
  toDoText.innerText = newTodo.text;

  const toDoBtnList = document.createElement("div");

  const toDoStatusChangeBtn = document.createElement("button");
  toDoStatusChangeBtn.innerText = "✔";
  toDoStatusChangeBtn.addEventListener("click", changeToDo);

  const toDoDelBtn = document.createElement("button");
  toDoDelBtn.innerText = "❌";
  toDoDelBtn.addEventListener("click", deleteToDo);

  toDoItem.appendChild(toDoText);
  toDoBtnList.appendChild(toDoStatusChangeBtn);
  toDoBtnList.appendChild(toDoDelBtn);
  toDoBtnList.className = "todolist-btnlist";

  toDoItem.appendChild(toDoBtnList);
  toDoItem.className = "todolist-item";

  if (newTodo.status === STATUSINCOMPLETE) {
    toDoIncompleteList.appendChild(toDoItem);
  } else {
    toDoCompleteList.appendChild(toDoItem);
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    status: STATUSINCOMPLETE,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function UpdateListItem(listItems) {
  while (listItems.lastElementChild) {
    listItems.removeChild(listItems.lastElementChild);
  }
}
function Update() {
  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos !== null) {
    UpdateListItem(toDoIncompleteList);
    UpdateListItem(toDoCompleteList);

    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
}

Update();

toDoForm.addEventListener("submit", handleToDoSubmit);
