//we require the rpn calculator function and the prep function that calls it
//We are calling the calculator via a command line interface (cli)
//The StdInStdOut function is called from a front end module
var processTokens = require('../model/processTokens.js');
var prepAndCallback = require('../controller/prepAndCallback.js');

function StdInStdOut() {

    // SIGINT has been tested on a Windows 10 CLI and it is called when the user hits
    // Ctrl-C It is assumed that SIGINT is called from a Unix CLI when the user hits
    // Ctrl-D but this has not been tested
    process.on("SIGINT", () => {
        process
            .stdout
            .write('See ya\n');
        process.exit();
    });

    process
        .stdin
        .setEncoding('utf8');

    // introductory text to be displayed when the user types 'node rnpCalcStdInOut.js
    // and hits enter
    process
        .stdout
        .write("Please enter a Postfix expression at the '>' and hit enter to evaluate it\n");
    process
        .stdout
        .write("(See examples of Postfix at https://en.wikipedia.org/wiki/Reverse_Polish_notatio" +
                "n)\n\n");
    process
        .stdout
        .write("To exit type 'q' and hit enter or type Ctrl-D (Ctrl-C on Windows)\n");

    //issue a prompt
    process
        .stdout
        .write("> ");

    //Called when the user enters a Postfix string and hits enter
    process
        .stdin
        .on('data', (inputString) => {
            var postFixInputString = inputString.trim();
            if (postFixInputString === 'q') {
                done();
            }

            // prepare the input string string for processing and return the result from the
            // rpn calculator
            var result = prepAndCallback(postFixInputString, processTokens);
            process
                .stdout
                .write("Result: " + result + "\n");

            //issue a prompt for the next round of input
            process
                .stdout
                .write("> ");
        });

    //Called when the user enters 'q' to quit
    function done() {
        process
            .stdout
            .write('See ya\n');
        process.exit();
    }
}
module.exports = StdInStdOut;