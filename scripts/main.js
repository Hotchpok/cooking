document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Aaaaa, I like you too";
        gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
    });

    noBtn.addEventListener("mouseover", () => {
        moveButtonRandomly(noBtn);
    });
});

function moveButtonRandomly(button) {
    const buttonRect = button.getBoundingClientRect();
    const maxX = window.innerWidth - buttonRect.width;
    const maxY = window.innerHeight - buttonRect.height;

    const randomX = getRandomNumber(0, maxX);
    const randomY = getRandomNumber(0, maxY);

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
