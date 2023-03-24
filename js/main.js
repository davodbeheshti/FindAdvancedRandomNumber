let submitBtn,
    stopBtn,
    firstStepInput,
    lastStepInput,
    output = 0,
    startCountNumber = false,
    stopOutput = 0;


document.addEventListener("DOMContentLoaded", () => {
    submitBtn = document.querySelector('#submit');
    stopBtn = document.querySelector('#stop');
    firstStepInput = document.querySelector('#firstStep');
    lastStepInput = document.querySelector('#lastStep');
    output = document.querySelector('#output');
    stopOutput = document.querySelector('#stopOutput');

    submitBtn.addEventListener('click', getValueInputs);
    stopBtn.addEventListener('click', getValueStopOutput);
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getValueInputs = () => {
    let firstInputValoue = +firstStepInput.value || 0;
    let lastInputValoue = +lastStepInput.value || 100;
    for (let i = firstInputValoue; i <= lastInputValoue; i++) {
        sleep(i * 10).then(_ => {
            output.innerHTML = i;
        })
    };
}

const getValueStopOutput = () => {
    stopOutput.innerHTML = output.innerHTML;
}


