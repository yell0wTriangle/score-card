let timer;  // Global timer ID

function startTimer() {
    let seconds = 0;
    let minutes = 0;

    // Clear any previous timer before starting a new one
    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        if (seconds >= 59) {
            seconds = 0;
            minutes++;
        } else {
            seconds++;
        }

        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    }, 1000);
}

function resetClock() {
    // Reset display
    document.getElementById("seconds").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    // Restart timer
    startTimer();
}

window.onload = startTimer;
