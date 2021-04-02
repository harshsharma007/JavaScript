/*
    The indexOf() method returns the first index at which a given element can be found in the array,
    or -1 if it is not present. See the below example:
*/

var data = ['g', 'o', 'o', 'g', 'l', 'e']

data.filter((value, index) => data.indexOf(value) === index)

/*
    But if you console log the data.indexOf then you would understand the whole story.
*/

data.filter((value, index) => {
    console.log('indexOf', data.indexOf(value), 'value', value, 'index', index)
    return data.indexOf(value) === index
})

/*
    Output:

    indexOf 0 value g index 0
    indexOf 1 value o index 1
    indexOf 1 value o index 2
    indexOf 0 value g index 3
    indexOf 4 value l index 4
    indexOf 5 value e index 5

    The first letter/value is 'g', so the indexOf(g) and index of the letter 'g', which is 0 matches so, 
    this value is considered as not duplicate. The second letter/value is 'o', so the indexOf(o) and 
    index of letter 'o', which is 1 matches so, this value is also not considered as duplicate.

    Coming to the next letter, which is 'o' again. The indexOf(0) is 1 but the index of this 'o' is 2,
    this value is considered as duplicate. Therefore, this index is marked as duplicate. And so on.
*/