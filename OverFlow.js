/*
    The example below will overflow the stack. It will not overflow the queue.
*/

function recurse() {
    console.log('Recursion!')
    return recurse()
}

recurse()