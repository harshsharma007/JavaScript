/*
    JavaScript is a single-threaded, synchronous language.
    Synchronous is a function that takes a really long time to run and will cause a page to become unresponsive.

    JavaScript has functions that act asynchronously.
    How a language can be both synchronous and asynchronous. In order to explain this, we need to understand
    the below concepts:
    1. Execution stack
    2. Browser APIs
    3. Function queue
    4. Event loop
*/

function hang(secs) {
    const doneAt = Date.now() + (secs * 1000)
    while (Date.now() < doneAt) {

    }
}
//hang(10)

/*
    The function will hang the process for 10 secs, because JavaScript is single threaded and keeps on waiting
    until the process is completed with for loop. 
*/