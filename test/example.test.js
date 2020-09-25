// IMPORT MODULES under test here:
import{add, subtract, multiply, divide} from './mathUtils.js';

const test = QUnit.test;

test('Expect 5 and 6 to return 11', (expect) => {
    let firstNumber = 5;
    let secondNumber = 6;
    let expectedSum = 11;

    let actualSum = add(firstNumber, secondNumber);

    expect.equal(actualSum, expectedSum);
});
