function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;

  document.getElementById("clock").innerText =
    hours + ":" + minutes;
}

setInterval(updateClock, 1000);

updateClock();

function addTask() {
  const input = document.getElementById("taskInput");

  if (input.value === "") return;

  const li = document.createElement("li");

  li.textContent = input.value;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}