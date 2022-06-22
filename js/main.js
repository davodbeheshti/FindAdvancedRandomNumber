let submitBtn,
    stopBtn,
    firstStepInput,
    lastStepInput,
    output;


document.addEventListener("DOMContentLoaded", () => {
    submitBtn = document.querySelector('#submit');
    stopBtn = document.querySelector('#stop');
    firstStepInput = document.querySelector('#firstStep');
    lastStepInput = document.querySelector('#lastStep');
    output = document.querySelector('#output');

    submitBtn.addEventListener('click', getValueInputs);
})

const getValueInputs = () => {}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



