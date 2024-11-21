const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");

const mobilemenu = document.querySelector("#mobilemenu");

hamburgerButton.addEventListener("click", function () {
    mobilemenu.classList.add("flex");
    });