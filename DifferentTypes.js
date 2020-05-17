/*
    There are different types in JavaScript
    Dynamic types
    Primitive types (no methods, immutable)
        undefined
        null
        boolean
        number
        string
        (symbol)
    Objects

    No float, so 0 and 0.1 both comes under number.

    Typecasting? Coercion
    Coercion is the act of changing one type to a different type. There are two different ways to coerce
    these variables.
*/

//Explicit vs Implicit Coercion
const x = 42
const explicit = String(x)
const implicit = x + ""

console.log(explicit)
console.log(implicit)