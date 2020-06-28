function printOne() {
    console.log('One')
}

function printTwo() {
    console.log('Two')
}

function printThree() {
    console.log('Three')
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

/*
    To understand the execution and output of the above code, keep in mind Stack, APIs, Event loop
    and Function queue.

    Event loop constantly checks if there is anything on the stack. If stack is empty, then it checks queue.
    If anything is present on the queue, then event loop moves it to the stack.

    setTimeout(printOne, 1000) will be pushed to stack.
*/