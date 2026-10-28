// Dark / Light Mode Toggle

const themeButton = document.getElementById("theme-toggle");

// Saved Theme Load Karna
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeButton.textContent = "🌙 Dark Mode";
} else {
    themeButton.textContent = "☀️ Light Mode";
}

// Theme Button Click
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙 Dark Mode";
    } else {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️ Light Mode";
    }

});

// Typing Animation

const typingText = document.getElementById("typing-text");

const messages = [
    "I am a Web Developer 💻",
    "I build amazing websites 🚀",
    "I love coding ❤️"
];

let messageIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentMessage = messages[messageIndex];

    if (isDeleting) {
        typingText.textContent = currentMessage.substring(
            0,
            characterIndex - 1
        );
        characterIndex--;
    } else {
        typingText.textContent = currentMessage.substring(
            0,
            characterIndex + 1
        );
        characterIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && characterIndex === currentMessage.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

if (typingText) {
    typeEffect();
}