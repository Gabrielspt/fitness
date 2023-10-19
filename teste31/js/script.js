// JavaScript
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("theme-cyan");
    } else if (body.classList.contains("theme-cyan")) {
        body.classList.remove("theme-cyan");
        body.classList.add("theme-brown");
    } else {
        body.classList.remove("theme-brown");
        body.classList.add("light-theme");
    }
}

function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById("clock");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);