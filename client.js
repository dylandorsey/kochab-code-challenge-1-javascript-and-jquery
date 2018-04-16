console.log('in js');

$(document).ready(onReady);

generateButtonClickCounter = 0;
let divID = 0;

function onReady() {
    console.log('in jq');
    $('main').append('<button id="btn-generate">Generate</button>');
    generateBtn = $('#btn-generate');
    generateBtn.on('click', generateClickHandler);
}

function generateClickHandler() {
    divID++;
    generateButtonClickCounter++;
    appendDiv();
    // console.log(generateButtonClickCounter);
    // console.log('generateClickHandler called')
}

function appendDiv() {
    console.log('appendDiv function called');
    $('main').append('<div id="'+divID+'" class="generated-div"></div>');
    appendP();
    // buttonClickCounterDiv = $('#buttonClickCounter');
    $('#'+divID).append('<button class="btn-swap">Swap</button>');
    $('#'+divID).append('<button class="btn-delete">Delete</button>');
    $('.btn-swap').on('click', swapClickHandler);
    $('.btn-delete').on('click', deleteClickHandler);

    function swapClickHandler(){

        // this function is not working correctly. After it changes it's DOM appearance, it still holds its css background-color value.
        // next I would figure out how to tie the color-swap logic to the DOM element's background-color value and not the css background-color valule.

        console.log('swap click handler called');
        console.log($(this).parent().css('background-color'));
        if ($(this).parent().css('background-color') == 'rgb(255, 0, 0)') {
            console.log('parent is red, change to yellow');
            $(this).parent().css('background-color', 'rgb(255, 255, 0)');
        }
        else if ($(this).parent().css('background-color') == 'rgb(255, 255, 0)') {
            console.log('parent is yellow, change to red');
            $(this).parent().css('background-color', 'rgb(255, 0, 0)');
        }
    
    }
}

function appendP() {
    $('#'+divID).append(`
        <p>
        ${generateButtonClickCounter}
        </p>
    `);
}



function deleteClickHandler(){
    console.log('deleteClickHandlerClicked');
    $(this).parent().remove();
}

// add click handler for swap button


