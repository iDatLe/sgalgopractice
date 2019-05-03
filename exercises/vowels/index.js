// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     let counter = 0;

//     for (let char of str.toLowerCase()) {
//         if (char === 'a' 
//             || char === 'e' 
//             || char === 'i' 
//             || char === 'o' 
//             || char === 'u' ) {
//             counter++;
//         }
//     }

//     return counter;
// }

function vowels(str) {
    let counter = 0;
    let word = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (word.includes(char)) {
            counter++;
        }
    }

    return counter;
}


console.log(vowels("I'VE RUN OUT OF TIME AND GOTTA START APPLYING TO jobs!!"))

module.exports = vowels;
