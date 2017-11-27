//This is an implementation of a Reverse Polish Notation (rpn) calculator that for now implements
//just the standard operations of addition, subtraction, multiplication, and division

//There is no explict validation for the postFix string; the process of pushing numbers onto the 
//stack and popping them off for a mathematical operation and pushing the result back onto the 
//stack serves to validate the postFix expression. If we end up with one entry on the stack which is
//a valid number then the postFix string is valid.

//postFixArray - an array of strings that contains the operators and operands of a postFix string
function processTokens(postFixArray) {
  try {
    //We'll use this prototpye to validate our numbers
    String.prototype.isNumeric = function () {
      return !isNaN(parseFloat(this)) && isFinite(this);
    }
    var resultStack = [];

    //Error messages
    const invalidPostfixExpression = "Invalid Postfix expression. ";
    const tryAgain = "Please try again.";
    const invalidOperand = " is an invalid operand. ";
    const divideByZero = "Attempt to divide by zero. ";

    var x = "";
    var y = "";

    if (postFixArray.length == 1) 
      return invalidPostfixExpression + tryAgain;
    
    for (var i = 0; i < postFixArray.length; i++) {

      if (postFixArray[i].isNumeric()) {
        resultStack.push(postFixArray[i]);
      } else {
        // we have an operand; let's pop two numbers off the stack and evaluate. Right
        // now we have four legal operations: add, subtract, multiply, and divide
        if (resultStack.length < 2) {
          return invalidPostfixExpression + tryAgain;
        } else {
          x = resultStack.pop();
          y = resultStack.pop();
        }

        switch (postFixArray[i]) {
          case "+":
            resultStack.push(parseFloat(x) + parseFloat(y));
            break;
          case "-":
            resultStack.push(parseFloat(y) - parseFloat(x));
            break;
          case "*":
            resultStack.push(parseFloat(x) * parseFloat(y));
            break;
          case "/":
            if (parseFloat(x) == 0) {
              return divideByZero + tryAgain;
            } else {
              resultStack.push(parseFloat(y) / parseFloat(x));
            }
            break;
          default:
            return postFixArray[i] + invalidOperand + tryAgain;
            break;
        } //closing bracket for switch
      } //closing bracket for not a numeric
    } //closing bracket for the loop

    if (resultStack.length != 1) {
      return invalidPostfixExpression + tryAgain;
    } else if (isNaN(resultStack[0])) {
      return invalidPostfixExpression + tryAgain;
    } else {
      return resultStack.pop();
    }
  } //end of try block 
  catch (err) {
  return err;
}
} //end of function declaration

module.exports = processTokens;