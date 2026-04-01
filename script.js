const add = (num1, num2) => +num1 + +num2;
const subtract = (num1, num2) => +num1 - +num2;
const multiply = (num1, num2) => +num1 * +num2;
const divide = (num1, num2) => +num1 / +num2;
let num1 = '';
let num2 = '';
let operator = '';

function operate (num1, operator, num2){
    if(operator === '+') {return add(num1, num2)};
    if(operator === '-') {return subtract(num1, num2)};
    if(operator === '*') {return multiply(num1, num2)};
    if(operator === '/') {return divide(num1, num2)};
};

const operationButtons = document.querySelectorAll('.op');
const numButtons = document.querySelectorAll('.num');

//Get the num1 value when buttons are pressed before operator
numButtons.forEach(item => item.addEventListener('click', (e) => {
    operator != '' ?
    num2 += item.textContent :
    num1 += item.textContent;
    refreshDisp(num1, operator, num2);
    console.log(`Num1 : ${num1} and num2: ${num2}`);
}));

operationButtons.forEach(item => item.addEventListener('click', (e) => {
    if (operator != '') {
        doTheOperation();
        operator = item.textContent;
    } else {
    operator.textContent = '';
    operator = item.textContent;
    };
    
}));

const display = document.querySelector('.disp');
function refreshDisp(num1, operator = '', num2 = ''){
    display.textContent = `${num1} ${operator} ${num2}`;
};

const equal = document.querySelector('.eq');
equal.addEventListener('click', window.doTheOperation = function() {
    let total = operate(num1, operator, num2);
    num1.textContent = '';
    num2 = '';
    num1 = total;
    refreshDisp(total);
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    total = '';
    display.textContent = '123456789';
});