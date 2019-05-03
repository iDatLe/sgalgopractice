// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    var results = [];

    for (let i = 0; i < n; i++) {
        results.push([]);
    }
    // To give it slots

    var counter = 1;
    var startColumn = 0;
    var startRow = 0;
    var endColumn = n - 1;
    var endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {

        // Left to right
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }

        startRow++;

        // Top to bottom
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }

        endColumn--;

        // Right to left
        for (let i = endColumn; i >=  startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }

        endRow--;

        // Bottom to top
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }
    return results;

}
console.log(matrix(12));


console.log(matrix(5));

module.exports = matrix;
