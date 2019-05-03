// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     const result = [0, 1];

//     for (i = 2; i <= n; i++) { // i starts at 2 because we already have the first 2 indices in the results array
//         const a = result[i - 1];
//         const b = result[i - 2];
//         result.push(a + b); // Each push will result in new length of array so variables a and b will constantly change
//     }

//     // return result; // get all results
//     return result[n] //get entry at n
// }

function memoize(fn) {

    const cache = {};

    return function(...args) { // Take all the arguments and assign them as an array called args

        if (cache[args]) { // Have we called this function with this result before?
            return cache[args]; // If so, return it
        }

        const result = fn.apply(this, args); // Applying the this keyword to the fib function. We use apply in the event of an array
        cache[args] = result; // At the hashtable, args, store the result we've just created

        return result;
    }
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }

    let arr = [0, 1];

    return fib(n-1) + fib(n-2); // These fibs are calling the new memoized function, not the original function

}

const fib = memoize(slowFib)

module.exports = fib;
