console.log('in js');

$(document).ready(onReady);

function onReady() {
    console.log('in jq');
    $('main').append('<button id="btn-generage">Generate</button>');
}


