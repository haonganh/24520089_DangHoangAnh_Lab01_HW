const recordedBeats = [];

let isRecording = false;
let recordingStartTime = 0;

const startButton = document.querySelector("#start-recording");
const stopButton = document.querySelector("#stop-recording");
const recordingStatus = document.querySelector("#recording-status");
const recordedBeatsList = document.querySelector("#recorded-beats");


function playSound(key) {
    const normalizedKey = key.toLowerCase();

    const pad = document.querySelector(
        `.drum-pad[data-key="${normalizedKey}"]`
    );

    if (!pad) {
        return;
    }

    const audio = new Audio(pad.dataset.sound);
    audio.play();
}


function startRecording() {
    recordedBeats.length = 0;
    recordingStartTime = performance.now();
    isRecording = true;

    recordedBeatsList.replaceChildren();

    recordingStatus.textContent = "Recording...";
    startButton.disabled = true;
    stopButton.disabled = false;
}


function stopRecording() {
    isRecording = false;

    recordingStatus.textContent = "Recording stopped";
    startButton.disabled = false;
    stopButton.disabled = true;
}


function recordBeat(key) {
    if (!isRecording) {
        return;
    }

    const beat = {
        key: key.toLowerCase(),
        timestamp: performance.now() - recordingStartTime
    };

    recordedBeats.push(beat);

    const item = document.createElement("li");

    item.textContent =
        `Key: ${beat.key.toUpperCase()} - ${Math.round(beat.timestamp)} ms`;

    recordedBeatsList.appendChild(item);
}


window.addEventListener("keydown", (event) => {
    if (event.repeat) {
        return;
    }

    const key = event.key.toLowerCase();

    playSound(key);

    const pad = document.querySelector(
        `.drum-pad[data-key="${key}"]`
    );

    if (pad) {
        recordBeat(key);
    }
});


startButton.addEventListener("click", startRecording);
stopButton.addEventListener("click", stopRecording);