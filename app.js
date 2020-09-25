import{addClickHandler, subtractClickHandler, multiplyClickHandler, divideClickHandler} from './clickHandlers.js';



    // Addition

let addButton = document.getElementById('add-button');

    addButton.addEventListener('click', addClickHandler);


    // Subtraction

let subtractButton = document.getElementById('subtract-button');

    subtractButton.addEventListener('click', subtractClickHandler);



    // Multiplication

let multiplyButton = document.getElementById('multiply-button');

    multiplyButton.addEventListener('click', multiplyClickHandler);



    // Divide Inputs

let divideButton = document.getElementById('divide-button');

divideButton.addEventListener('click', divideClickHandler);


