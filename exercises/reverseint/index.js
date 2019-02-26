// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {

//     if (Math.sign(n) === -1) {
//         var x = Math.abs(n).toString().split('').reverse().join('')
//         const negative =- x
//         return negative;
//     } else {
//         var x = n.toString().split('').reverse().join('')
//         return Math.round(x);
//     }
// }

function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reversed) * Math.sign(n);
}


module.exports = reverseInt;
