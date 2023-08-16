// Task 4.

// Տրված է հավասարաչափ մատրիցա (nxm). 
// Շրջել մատրիցան այնպես որ տողերը դառնան սյուներ, իսկ սյուները՝ տողեր։

function transformMatrix(matrix) {
    for (let row = 0; row < matrix.length; ++row) {
        for (let col = row; col < matrix[row].length; ++col) {
            const tmp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = tmp;
        }
    }
}
