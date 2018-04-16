console.log('in js');

$(document).ready(onReady);

generateButtonClickCounter = 0;

function onReady() {
    console.log('in jq');
    $('main').append('<button id="btn-generate">Generate</button>');
    generateBtn = $('#btn-generate');
    generateBtn.on('click', generateClickHandler);
}

function generateClickHandler() {
    appendDiv();
    generateButtonClickCounter++;
    console.log(generateButtonClickCounter);
    console.log('generateClickHandler called')
}

function appendDiv() {
    console.log('appendDiv function called');
    $('main').append('<div id="buttonClickCounter" class="generated-div"></div>');
    appendP();
    buttonClickCounterDiv = $('#buttonClickCounter');
    buttonClickCounterDiv.append('<button class="btn-swap">Swap</button>');
    buttonClickCounterDiv.append('<button class="btn-delete">Delete</button>');
    $('.btn-swap').on('click', swapClickHandler);
    $('.btn-delete').on('click', deleteClickHandler);
}

function appendP() {
    $('#buttonClickCounter').append(`
        <p>
        ${generateButtonClickCounter}
        </p>
    `);
}

function swapClickHandler(){
    console.log('swapClickHandlerClicked');
    console.log($('.btn-swap').parent());
    $('.btn-swap').parent().remove();
}

function deleteClickHandler(){
    console.log('deleteClickHandlerClicked');
    $('.btn-delete').parent().remove();
}

// add click handler for swap button


