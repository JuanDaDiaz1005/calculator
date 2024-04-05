document.addEventListener('DOMContentLoaded', function() {
    buttons();
    
});

function buttons(){
    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', clearDisplay);

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