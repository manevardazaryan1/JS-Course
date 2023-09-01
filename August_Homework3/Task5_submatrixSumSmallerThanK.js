'use strict'

// Task 5.

// Տրված է քառակսաձեւ մատրիցա(nxn), վերադարձնել նորը, որտեղ կլինեն միայն այն տողերն  սյուները որոնց գմարը չի գերազանցի նշված k թիվը։

const colSum = function(col, matrix){
    let sum = 0; 
    for(let row = 0; row < matrix.length; ++row){
        sum += matrix[row][col];
    }
    return sum;
}

const smallerThanK = function(matrix, k, colSum) {
    const newMatrix = [];
    let bool = true;
    let sum, count;
    
    for (let col = 0; col < matrix[0].length; ++col) {
        count = 0;
        if (colSum(col, matrix) < k){
            for (let row = 0; row < matrix.length; ++row) {
                if (bool)
                    newMatrix[row] = [];
                newMatrix[row].push(matrix[row][col]);
            }
            bool = false;
        }
    }
    return newMatrix.filter(row => (row.reduce((acc, rowItem) => acc + rowItem, 0) < k));
}
