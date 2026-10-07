const countdownElement = document.querySelector("#countdown");

const eventTime = new Date("2026-12-01T12:00:00Z").getTime();

function updateCountdown() {
    const now = Date.now();

    const remainingTime = eventTime - now;

    if (remainingTime <= 0) {
        countdownElement.textContent = "Event started!";
        return;
    }

    const totalSeconds = Math.floor(remainingTime / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(
        (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;

    countdownElement.textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();

setInterval(updateCountdown, 1000);