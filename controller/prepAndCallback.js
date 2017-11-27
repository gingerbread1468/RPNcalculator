//params
//
//postFixInputString - a postInfix string entered at the commmand line
//that may be invalid

//processTokens - callback function which will produce an answer 
function prepAndCallback(postFixInputString, processTokens) {
  var postFixArray = postFixInputString
    .replace(/\s+/g, ' ')
    .trim()
    .split(" ");
  return processTokens(postFixArray);
}

module.exports = prepAndCallback;