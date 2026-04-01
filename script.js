const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
let num1 = '';
let num2 = '';
let operator = '';
const operate = (num1, num2, operator) => {
    switch(operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}
const operationButtons = document.querySelectorAll('.op');
const numButtons = document.querySelectorAll('.num');

//Get the num1 value when buttons are pressed before operator
numButtons.forEach(item => item.addEventListener('click', (e) => {
    console.log(item.textContent);
    operator != '' ?
    num2 += item.textContent :
    num1 += item.textContent;
    console.log(`Num1 : ${num1} and num2: ${num2}`);
}));

operationButtons.forEach(item => item.addEventListener('click', (e) => {
    operator = item.textContent;
    console.table(operator);
}));