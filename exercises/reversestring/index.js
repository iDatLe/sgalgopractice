// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('')
// }

// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         // variable character is redeclared every time in the loop of the iterable object str
//         reversed = character + reversed;
//         // we take character and add it to the beginning of the string 'reversed' every time
//     }

//     return reversed;
// }

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
    // reduce take all values in array and condense to one singular value
    // takes in two values. The first being a function and our second one is our starting argument

    // it starts like this: 
    // h + ''
    // e + 'h'
    // l + 'eh'
    // l + 'leh'
    // o + 'lleh'
    // results: 'olleh'
}

module.exports = reverse;
