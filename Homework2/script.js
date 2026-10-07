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