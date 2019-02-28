// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const hash = {};
    let max = 0;
    let result = '';

    for (let char of str) {
        if (!hash[char]) {
            hash[char] = 1;
        } else {
            hash[char]++;
        }
    }

    for (let char in hash) {
        if (hash[char] > max) {
            max = hash[char];
            result = char;
        }
    }

    return result;

}

console.log(maxChar('hello'))

module.exports = maxChar;
