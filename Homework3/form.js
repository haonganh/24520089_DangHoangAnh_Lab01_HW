const FORM_STATE = {
    IDLE: "idle",
    SUBMITTING: "submitting",
    SUCCESS: "success",
    ERROR: "error"
};

let formState = FORM_STATE.IDLE;

const form = document.querySelector("#registration-form");
const statusElement = document.querySelector("#form-status");
const submitButton = document.querySelector("#submit-button");


function setFormState(newState) {
    formState = newState;

    submitButton.disabled =
        newState === FORM_STATE.SUBMITTING;

    switch (newState) {
        case FORM_STATE.IDLE:
            statusElement.textContent = "Ready to register.";
            break;

        case FORM_STATE.SUBMITTING:
            statusElement.textContent = "Submitting...";
            break;

        case FORM_STATE.SUCCESS:
            statusElement.textContent = "Registration successful.";
            break;

        case FORM_STATE.ERROR:
            statusElement.textContent = "Registration failed.";
            break;
    }
}


function submitRegistration() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (formState === FORM_STATE.SUBMITTING) {
        return;
    }

    setFormState(FORM_STATE.SUBMITTING);

    try {
        await submitRegistration();

        setFormState(FORM_STATE.SUCCESS);
    } catch {
        setFormState(FORM_STATE.ERROR);
    }
});