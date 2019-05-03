// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    var space = n - 1;
    var hash = 1;

    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(space) + '#'.repeat(hash) + ' '.repeat(space));
        hash += 2;
        space--;
    }
}

console.log(pyramid(5));

module.exports = pyramid;

'   *   '
'  ***  '
' ***** '
'*******'
