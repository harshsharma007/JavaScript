/*
    Asynchronous functions are:
    1. setTimeout()
    2. XMLHttpRequest(), jQuery.ajax(), fetch()
    3. Database calls
*/

function printOne() {
    console.log('One')
}

function printTwo() {
    console.log('Two')
}

function printThree() {
    console.log('Three')
}

function printFour() {
    console.log('Four')
}

function printFive() {
    console.log('Five')
}

/*
    If the above functions are called like below:
    printOne()
    printTwo()
    printThree()

    Then the output is:
    One
    Two
    Three

    But, if we use setTimeout method like below. Then, the output is very different
*/

setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()
setTimeout(printFour, 0)
setTimeout(printFive, 0)

/*
    To understand the execution and output of the above code, keep in mind Stack, APIs, Event loop
    and Function queue.

    APIs handle asynchronous part of the JavaScript. So, there is no guarantee which part will be executed first.
    APIs are handled by browser. They push the objects to the Function Queue and after that there is guarantee
    how the order will be executed.

    Stack follows First In Last Out, whereas Queue follows First In First Out for the execution.

    Firstly, all setTimeout is pushed to APIs. Due to which, printThree() method is directly pushed to the
    stack and gets executed. As, the execution timeout for printTwo() method has been set to 0 secs. So,
    it is picked from APIs and pushed to the Function Queue (Function Queue works on FIFO).

    Event loop constantly checks if there is anything on the stack (Stack follows First In Last Out).
    If the stack is not empty, then it will let the task perform its action. Otherwise, if stack is empty,
    then it checks queue. If anything is present on the queue, then event loop moves it to the stack.
    As a result, printTwo() is now moved to the stack and gets executed.

    IF THERE IS SOMETHING ON THE STACK, THEN IT WILL ALWAYS GETS HIGHEST PRIORITY.

    After this, there is no action performed for 1000 milliseconds. When the timer reaches to 0 milliseconds,
    then again the printOne() method is moved to the Function Queue.

    Is there any limit to the Queue memory? What happens when we get out of the memory?
*/