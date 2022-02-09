const clock1 = document.getElementById("clock1");

// String(day.getDay()).padStart(2, "0");

function funcClock1() {
  const date = new Date();

  const hou = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  clock1.innerHTML = `${hou}:${min}:${sec}`;
}

setInterval(funcClock1, 1000);
funcClock1();
