/*
    All variables and functions are actually parameters and methods on the global object. That is how JavaScript
    keeps track of everything.
        1. Browser global object is the 'window' object.
        2. Node.js global object is the 'global' object.
*/

/*
    If we run 'window' keyword on the console of the browser then it will load multiple methods. Methods
    generated by the window keyword depends on the elements loaded on the page. If there are many elements then
    there would be a lot of methods that would be created by the window keyword.

    But, if we run the 'window' keyword on an empty tab then it will generate far fewer methods because there
    are very few elements.
*/