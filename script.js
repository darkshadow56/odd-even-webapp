//Get all the required elements from the Document
const form = document.getElementById('form');
const input = document.querySelector('.input');
const result = document.querySelector('.result');
const small = document.querySelector('.small');

//Funtions
//
//This function is used to display Error
function showError(input, message) {
    input.parentElement.className = 'input-grp error';
    small.innerHTML = message;
}
//
//This function is used to display Success
function showSuccess(input, message) {
    input.parentElement.className = 'input-grp success';
    small.innerHTML = message;
}
//This Function checks if the input is filled or empty
function checkInput(input) {
    if (input.value === '') {
        result.innerHTML = '';
        showError(input, '*This Field is Required!')
    }
    else {
        const regex = /^[0-9]*$/;
        if (!regex.test(input.value)) {
            showError(input, '*Only Numbers are allowed')
        } else {
            checkLength(input);
        }
    }
}
//
//This function checks the length of the number
function checkLength(input){
    const len = input.value;
    if (len > 999 && len < 10000) {
        showSuccess(input,'*Looks Good');
        checkOddEve(input);
    } else{
        showError(input, '*Only 4 Digit Number Allowed!')
    }
}
//
//This function checks Odd Even
function checkOddEve(input) {
    const val = input.value;
    if(val%2===0){
        result.innerHTML = 'Even Number - Allowed on M - W - F';
    }else{
        result.innerHTML = 'Odd Number - Allowed on T - T - S';
    }
}



//Event Listener (Here it will listen to the Submit Event of the form)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput(input)
});