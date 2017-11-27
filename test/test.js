// Require the built in 'assertion' library
var assert = require('assert');
//Require the necessary RPN calculator functions for testing
var prepAndCallback = require('../controller/prepAndCallback.js');
var processTokens = require('../model/processTokens.js');

// Create a group of tests for the RPN Calculator
describe('RPN calculator', function () {
    // Within our RPN calculator group, create a group of tests for the RPN
    // calculator
    describe('Can add', function () {
        it('Postfix expression "10 10 +"should return 20', function () {
            assert.equal(20, prepAndCallback("10 10 +", processTokens));
        });
    });
    describe('Can multiply', function () {
        it('Postfix expression "10 10 *" should return 100', function () {
            assert.equal(100, prepAndCallback("10 10 *", processTokens));
        });
    });
    describe('Can divide', function () {
        it('Postfix expression "10 10 /" should return 1', function () {
            assert.equal(1, prepAndCallback("10 10 /", processTokens));
        });
    });
    describe('Can subtract', function () {
        it('Postfix expression "10 10 -" should return 0', function () {
            assert.equal(0, prepAndCallback("10 10 -", processTokens));
        });
    });
    describe('Can handle all operations in one expression', function () {
        it('Postfix expression "15 7 1 1 + - / 3 * 2 1 1 + + -" should return 5', function () {
            assert.equal(5, prepAndCallback("15 7 1 1 + - / 3 * 2 1 1 + + -", processTokens));
        });
    });
    describe('Can handle an invalid expression', function () {
        it('Postfix expression 10 10 should return an error message', function () {
            assert.equal("Invalid Postfix expression. Please try again.", prepAndCallback("10 10", processTokens));
        });
    });
    describe('Can handle an invalid operand', function () {
        it('Postfix expression 10 10 x should return an error message', function () {
            assert.equal("x is an invalid operand. Please try again.", prepAndCallback("10 10 x", processTokens));
        });
    });
    describe('Can handle an attempt to divide by zero', function () {
        it('Postfix expression 10 0 / should return an error message', function () {
            assert.equal("Attempt to divide by zero. Please try again.", prepAndCallback("10 0 /", processTokens));
        });
    });
});