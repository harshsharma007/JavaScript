const o = {
    a: 'a',
    b: 'b'
}

const o2 = o
o.a = 'new a'

console.log(o2.a)

/*
    The above code is an example of Object Mutation. It will print 'new a'. Because both o and o2 points
    to the same object.
*/

/*
    A mutable object is an object whose state can be modified after it is created.
    An immutable object is an object whose state cannot be modified after it is created.
    Examples of native JavaScript values that are mutable includes array, object, function, class, set and maps.
    Examples of immutable objects from the JDK include String and Integer.
    In Java, all strings are immutable.
    When you are trying to modify a String, what you are really doing is creaating a new one.
    However, when you use a StringBuilder, you are actually modifying the contents, instead of creating
    a new one.
*/