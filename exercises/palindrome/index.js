// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {

//     const reversed = str.split('').reduce((acc, curr) => curr + acc, '');

//     return reversed === str;

// }

// function palindrome(str) {

//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed === str

// }

function palindrome(str) {

    return str.split('').every((char, i) => {
        // the first argument in the every method is the individual items in the an array
        // the second argument is the index of the item we're currently iterating over
        return char === str[str.length - i - 1];
    });

}
// Definitely not an ideal solution because it doubles the time necessary. However, it will demonstrate your understanding of the problem

module.exports = palindrome;
