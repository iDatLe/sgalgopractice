// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {

//     var hash = {};
//     var A = stringA.replace(/[^\w]/g, "").toLowerCase()
//     var B = stringB.replace(/[^\w]/g, "").toLowerCase()

//     if (A.length !== B.length) {
//         return false;
//     } else {
//         for (let charA of A) {
//             if (!hash[charA]) {
//                 hash[charA] = 1;
//             } else {
//                 hash[charA]++;
//             }
//         }

//         for (let charB of B) {
//             if (!hash[charB]) {
//                 return false;
//             }
//         }
//     }

//     return true;
// }

// function anagrams(stringA, stringB) {

//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);


//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;

// }

// function buildCharMap(str) {
//     const hash = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         hash[char] = hash[char] + 1 || 1;
//     }

//     return hash;
// }

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
