'use strict'

// Task 4.

// Տրված է հավասարաչափ մատրիցա (nxm). 
// Շրջել մատրիցան այնպես որ տողերը դառնան սյուներ, իսկ սյուները՝ տողեր։

function transformMatrix(matrix) {
    const tmp;
    for (let row = 0; row < matrix.length; ++row) {
        for (let col = row; col < matrix[row].length; ++col) {
            tmp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = tmp;
        }
    }
}
