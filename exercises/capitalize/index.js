// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// function capitalize(str) {
//     var splitStr = '';
//     // This will split the string into array of words
//     var result = [];

//     splitStr = str.split(' ');
//     // Splitting it

//     splitStr.reduce((acc, curr) => {
//         result.push(curr.replace(curr[0], curr[0].toUpperCase()));
//     }, splitStr[0]);
//     // Replace each word in array with its capital letter, starting at the first index of splitStr
//     return result.join(' ');
//     // Join the results again, separated by space
// }


function capitalize(str) {
    const results = [];

    for (let word of str.split(' ')) {
        results.push(word[0].toUpperCase() + word.slice(1));
        // The first letter is transformed to uppercase and joined by the rest of its body (in word.slice(index));
        // Then we push it into results
    }

    return results.join(' ');
    // Then we join the results
}

console.log(capitalize("hello world, I am dat"))

module.exports = capitalize;
