console.log('in js');

$(document).ready(onReady);

generateButtonClickCounter = 0;

function onReady() {
    console.log('in jq');
    $('main').append('<button id="btn-generate">Generate</button>');
    generateBtn = $('#btn-generate');
    generateBtn.on('click', clickHandler);
}

function clickHandler() {
    appendDiv();
    generateButtonClickCounter++;
    console.log(generateButtonClickCounter);
}

function appendDiv() {
    console.log('appendDiv function called');
    $('main').append('<div id="buttonClickCounter" class="generated-div"></div>');
    appendP();
    buttonClickCounterDiv = $('#buttonClickCounter');
    buttonClickCounterDiv.append('<button id="btn-swap">Swap</button>');
    buttonClickCounterDiv.append('<button id="btn-delete">Delete</button>');
}

function appendP() {
    $('#buttonClickCounter').empty();
    $('#buttonClickCounter').append(`
        <p>
        ${generateButtonClickCounter}
        </p>
    `);
    console.log('button clicks: ' + buttonClickCounter);
}


