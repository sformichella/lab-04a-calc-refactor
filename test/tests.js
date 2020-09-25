import{add, subtract, multiply, divide} from '../mathUtils.js';



    // add() Tests

const addTestOne = QUnit.test;

addTestOne('Expect 5 and 6 to return 11', (expect) => {
    let firstNumber = 5;
    let secondNumber = 6;
    let expectedSum = 11;

    let actualSum = add(firstNumber, secondNumber);

    expect.equal(actualSum, expectedSum);
});




const addTestTwo = QUnit.test;

addTestTwo('Expect 7 and 1 to return 8', (expect) => {
    let firstNumber = 7;
    let secondNumber = 1;
    let expectedSum = 8;

    let actualSum = add(firstNumber, secondNumber);

    expect.equal(actualSum, expectedSum);
});






    // subtract() Tests

const subtractTestOne = QUnit.test;

subtractTestOne('Expect 5 and 6 to return 11', (expect) => {
    let firstNumber = 5;
    let secondNumber = 6;
    let expectedSum = -1;

    let actualSum = subtract(firstNumber, secondNumber);

    expect.equal(actualSum, expectedSum);
});




const subtractTestTwo = QUnit.test;

subtractTestTwo('Expect 7 and 1 to return 8', (expect) => {
    let firstNumber = 7;
    let secondNumber = 1;
    let expectedSum = 6;

    let actualSum = subtract(firstNumber, secondNumber);

    expect.equal(actualSum, expectedSum);
});






    // multiply() Tests

const multiplyTestOne = QUnit.test;

multiplyTestOne('Expect 5 and 6 to return 11', (expect) => {
    let firstNumber = 5;
    let secondNumber = 6;
    let expectedSum = 30;

    let actualSum = multiply(firstNumber, secondNumber);

    expect.equal(actualSum, expectedSum);
});




const multiplyTestTwo = QUnit.test;

multiplyTestTwo('Expect 7 and 1 to return 8', (expect) => {
    let firstNumber = 7;
    let secondNumber = 1;
    let expectedSum = 7;

    let actualSum = multiply(firstNumber, secondNumber);

    expect.equal(actualSum, expectedSum);
});





    // divide() Tests

const divideTestOne = QUnit.test;

divideTestOne('Expect 5 and 6 to return 11', (expect) => {
    let firstNumber = 20;
    let secondNumber = 5;
    let expectedSum = 4;

    let actualSum = divide(firstNumber, secondNumber);

    expect.equal(actualSum, expectedSum);
});




const divideTestTwo = QUnit.test;

divideTestTwo('Expect 7 and 1 to return 8', (expect) => {
    let firstNumber = 9;
    let secondNumber = 1;
    let expectedSum = 9;

    let actualSum = divide(firstNumber, secondNumber);

    expect.equal(actualSum, expectedSum);
});



