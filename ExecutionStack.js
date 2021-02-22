/*
    Functions invoked by other functions get added to the call stack.
    When functions complete, they are removed from the stack and the frame below continues executing.
*/

function addOne(num) {
    return num + 1
    //throw new Error('An error encountered')
    /*
        This error line will also show the call stack.
    */    
}

function getNum() {
    return addOne(10)
}

function c() {
    console.log(getNum() + getNum())
}

c()

/*
    When c is invoked, c is going to console log getNum plus getNum.
    getNum passes 10 to addOne method and in return will get 11 (10 + 1). So, it will console.log(11 + 11).
    The stack which will be created here, would be in the below chronology:
    1. addOne(10)
    2. getNum()
    3. c()

    The value of addOne() method is get passed to the getNum() method and in return will be passed to c().
    addOne(10) returns 11 to getNum(), 11 is returned to c().
    After addOne(10) is evaluated, it is erased from the stack.
    When getNum() is evaluated, it also get erased from the stack.
    And, when c() console.log 22, then c() is also erased from the stack.

    Q. What happens if one of the functions creates closure? Does it still disappear from the stack?
    A. As long as, nothing needs to be remembered all of those variables and stacks.
       If these functions, don't create other closures then they'll be erased. This is handled by engine 
       itself.
*/