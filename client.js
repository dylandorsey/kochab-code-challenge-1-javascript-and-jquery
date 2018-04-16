console.log('in js');

$(document).ready(onReady);

function onReady() {
    console.log('in jq');
    $('main').append('<button id="btn-generate">Generate</button>');
    generateBtn = $('#btn-generate');
    generateBtn.on('click', clickHandler);
}

function clickHandler() {
    appendDiv;
    console.log('button clicked');
    // $('#btn-generate').on('click', appendP);
}

function appendDiv() {
    console.log('appendDiv function called');
    $('main').append('<div id="buttonClickCounter" class="generated-div"></div>');
}

// function appendP() {

// }


