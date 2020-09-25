import{add, subtract, multiply, divide} from './mathUtils.js';



    // Addition

let sum = document.getElementById('sum');
let addend1 = document.getElementById('add-first-number');
let addend2 = document.getElementById('add-second-number');

export function addClickHandler () {

    let num1 = addend1.value;
    let num2 = addend2.value;

    if (num1 === '' || num2 === '') {
        sum.textContent = 'Please enter two numbers!';
    }
    else {
        sum.textContent = add(Number(num1), Number(num2));
    }

};



    // Subtraction

let difference = document.getElementById('difference');
let minuend = document.getElementById('subtract-first-number');
let subtrahend = document.getElementById('subtract-second-number');

export function subtractClickHandler () {

    let num1 = minuend.value;
    let num2 = subtrahend.value;

    if (num1 === '' || num2 === '') {
        difference.textContent = 'Please enter two numbers!'
    }
    else {
        difference.textContent = subtract(Number(num1), Number(num2));
    }

};



    // Multiplication

let product = document.getElementById('product');
let factor1 = document.getElementById('multiply-first-number');
let factor2 = document.getElementById('multiply-second-number');

export function multiplyClickHandler () {

    let num1 = factor1.value;
    let num2 = factor2.value;

    if (num1 === '' || num2 === '') {
        product.textContent = 'Please enter two numbers!'
    }
    else {
        product.textContent = multiply(Number(num1), Number(num2));
    }

};



    // Division

let quotient = document.getElementById('quotient');
let dividend = document.getElementById('divide-first-number');
let divisor = document.getElementById('divide-second-number');

export function divideClickHandler () {

    let num1 = dividend.value;
    let num2 = divisor.value;

    if (num1 === '' || num2 === '') {
        quotient.textContent = 'Please enter two numbers!'
    }
    else {
        quotient.textContent = divide(Number(num1), Number(num2));
    }

};


