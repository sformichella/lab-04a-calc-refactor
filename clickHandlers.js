import{ add, subtract, multiply, divide} from './mathUtils.js';



    // Addition

let sum = document.getElementById('sum');
let addend1 = document.getElementById('add-first-number');
let addend2 = document.getElementById('add-second-number');

export function addClickHandler () {

    if (addend1 === '' || addend2 === '') {
        sum.textContent = 'Please enter two numbers!'
    }
    else {
        sum.textContent = add(Number(addend1), Number(addend2));
    }

};



    // Subtraction

let difference = document.getElementById('difference');
let minuend = document.getElementById('subtract-first-number');
let subtrahend = document.getElementById('subtract-second-number');

export function addClickHandler () {

    if (minuend === '' || subtrahend === '') {
        difference.textContent = 'Please enter two numbers!'
    }
    else {
        difference.textContent = subtract(Number(minuend), Number(subtrahend));
    }

};



    // Multiplication

let product = document.getElementById('product');
factor1 = document.getElementById('multiply-first-number');
factor2 = document.getElementById('multiply-second-number');

export function subtractClickHandler () {

    if (factor1 === '' || factor2 === '') {
        product.textContent = 'Please enter two numbers!'
    }
    else {
        product.textContent = multiply(Number(factor1), Number(factor2));
    }

};



    // Division

let quotient = document.getElementById('quotient');
let dividend = document.getElementById('divide-first-number');
let divisor = document.getElementById('divide-second-number');

export function divideClickHandler () {

    if (dividend === '' || divisor === '') {
        quotient.textContent = 'Please enter two numbers!'
    }
    else {
        quotient.textContent = divide(Number(dividend), Number(divisor));
    }

};


