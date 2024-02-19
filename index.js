const read = document.getElementById("read");
const card = document.getElementById("card");
const main = document.getElementById("main");
read.addEventListener("click", function (event) {
  event.preventDefault();
  main.innerHTML = "";
  const noNotifications = document.createElement("h1");
  noNotifications.textContent = "You have no notifications!";
  main.appendChild(noNotifications);
});
