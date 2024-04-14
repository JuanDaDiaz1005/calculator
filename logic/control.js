document.addEventListener('DOMContentLoaded', function() {
    buttons();
    
});

function buttons(){
    
    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', clearDisplay);

    const btn_zero = document.querySelector('.zero');
    btn_zero.addEventListener('click', function() {
        const display = document.querySelector('.display');
        display.innerHTML += '0';
    });

    const btn_one = document.querySelector('.one');
    btn_one.addEventListener('click', function() {
        const display = document.querySelector('.display');
        display.innerHTML += '1';
    });

    const btn_two = document.querySelector('.two');
    btn_two.addEventListener('click', function() {
        const display = document.querySelector('.display');
        display.innerHTML += '2';
    });

    const btn_three = document.querySelector('.three');
    btn_three.addEventListener('click', function() {
        const display = document.querySelector('.display');
        display.innerHTML += '3';
    });

    const btn_four = document.querySelector('.four');
    btn_four.addEventListener('click', function() {
        const display = document.querySelector('.display');
        display.innerHTML += '4';
    });

    const btn_five = document.querySelector('.five');
    btn_five.addEventListener('click', function() {
        const display = document.querySelector('.display');
        display.innerHTML += '5';
    });

    const btn_six = document.querySelector('.six');
    btn_six.addEventListener('click', function() {
        const display = document.querySelector('.display');
        display.innerHTML += '6';
    });

    const btn_seven = document.querySelector('.seven');
    btn_seven.addEventListener('click', function() {
        const display = document.querySelector('.display');
        display.innerHTML += '7';
    });

    const btn_eight = document.querySelector('.eight');
    btn_eight.addEventListener('click', function() {
        const display = document.querySelector('.display');
        display.innerHTML += '8';
    });

    const btn_nine = document.querySelector('.nine');
    btn_nine.addEventListener('click', function() {
        const display = document.querySelector('.display');
        display.innerHTML += '9';
    });

}

function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = '';
}

