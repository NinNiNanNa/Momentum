const clock = document.querySelector("h1");
const currentDate = document.querySelector("h2");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  clock.innerText = `${hour}:${minute}`;
  currentDate.innerText = `${year}.${month}.${day}`;
}
getClock();
setInterval(getClock, 1000);