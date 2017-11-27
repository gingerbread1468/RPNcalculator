# RPNcalculator

This is an RPN calculator that runs from the command line and is written in JavaScript.

The directory structure, i.e. the MVC architecture, looks like this, is divided into a controller directory, a view directory, a model directory, and a test directory.

The calculator is comprised of four JavaScript files, each separated out into a separate directory for modularity and separation of concerns:

1. app.js – calls StdInStdOut.js
2. view/StdInStdOut.js – handles the command line interface with process.stdin/process.stdout and requires processTokens.js and prepAndCallback.js. When it receives an input string it calls prepAndCallback.
3. controller/prepAndCallback.js – cleans up the input string, splits it into an array of tokens, and executes a callback with processTokens.js
4. model/processTokens.js – this is the meat of the tomato. An array of tokens is passed in and there is a lot of pushing and popping of the stack going on as the Postfix expression is evaluated and the result is determined and returned to StdInStdOut.js

This architecture will allow for future expansion and the ability to add alternate interfaces such as WebSocket or TCP socket.

The fifth JavaScript file, test.js, is for unit testing as the name indicates. It uses the mocha testing framework and is accompanied by a package.json file. If you don’t have mocha installed on your system, install it globally with the “npm install –g mocha” command. After installing mocha, you can run test.js by typing the following command in the test directory: 

npm test  

You will be rewarded with a spectacular view of the test results.

To start the calculator, run the following command in the RPNCalculator directory:

node app.js 

You’ll see the following output:
                                                                       
Please enter a Postfix expression at the '>' and hit enter to evaluate it            
(See examples of Postfix at https://en.wikipedia.org/wiki/Reverse_Polish_notation)   
                                                                                     
To exit type 'q' and hit return or type Ctrl-D (Ctrl-C on Windows) 
>

You can then enter your PostFix expression and hit enter: 
                                     
> 15 7 1 1 + - / 3 * 2 1 1 + + -                                                    
Result: 5                                                                            
> 

The calculator has been tested on Windows 10 running node v6.8.1. The calculator has not been tested on a Unix system and so it has not been verified whether or not ‘Ctrl-D’ will stop the calculator when running Unix. Either way the calculator can always be stopped by typing ‘q’ at the prompt. Given more time it would be worthwhile to test on a Unix system.



                                                                                 


        


