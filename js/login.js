const loginForm = document.querySelector("#username-form");
const loginInput = document.querySelector("#username-form input");

const header = document.querySelectorAll(".not-logined");
const todoBtn = document.querySelector(".todo-not-logined");

const bookmarkBtn = document.querySelector(".skill-not-logined");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요 ${username}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  header.forEach((element) => {
    element.classList.remove("not-logined");
  });
  todoBtn.classList.remove("todo-not-logined");
  bookmarkBtn.classList.remove("skill-not-logined");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else paintGreetings(savedUsername);
