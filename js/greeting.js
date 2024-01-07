const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logoutBtn");
const toDoWrap = document.querySelector(".todoList_wrap");
const toDoTitleWrap = document.querySelector(".todoTitle_wrap");
const logoutBtnWrap = document.querySelector(".logoutBtn_wrap");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(name) {
  const greetingArr = ["Good morning", "Good afternoon", "Good evening", "Hello"];
  const date = new Date();
  const hour = date.getHours();
  if (hour === 0 || hour < 8) {
    greeting.innerText = `${greetingArr[3]}, ${name}.`;
  } else if (hour > 7 && hour < 12) {
    greeting.innerText = `${greetingArr[0]}, ${name}.`;
  } else if (hour > 11 && hour < 17) {
    greeting.innerText = `${greetingArr[1]}, ${name}.`;
  } else if (hour > 16 && hour <= 24) {
    greeting.innerText = `${greetingArr[2]}, ${name}.`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoWrap.classList.remove(HIDDEN_CLASSNAME);
  toDoTitleWrap.classList.remove(HIDDEN_CLASSNAME);
  logoutBtnWrap.classList.remove(HIDDEN_CLASSNAME);
}

function logoutClick() {
  if (confirm("로그아웃하시면 작성했던 모든 todo가 지워집니다.")) {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TODOS_KEY);
    window.location.reload();
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}

logoutBtn.addEventListener("click", logoutClick);
