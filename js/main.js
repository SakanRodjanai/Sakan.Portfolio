function updateGreeting() {
  const greetingElement = document.getElementById("greeting");
  const currentHours = new Date().getHours();

  if (currentHours >= 18) {
    greetingElement.textContent = "Bonsoir! Ça va?";
  } else {
    greetingElement.textContent = "Bonjour! Ça va?";
  }
}
updateGreeting();

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle("open");
}