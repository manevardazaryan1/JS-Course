// Task 1.

// Տրված է թվերի մատրիցա(զանվածների երկարթյնը կարող է տարբեր լինել) 
// գտնել ամենամեծ գումարը ունեցող array-ի ինդեքսը:

const maxSumIndex = function (arrSum) {
    let max = arrSum[0]
    let maxIndex = 0;
    
    for (let i = 1; i < arrSum.length; ++i) {
        if (max < arrSum[i]){
            max = arrSum[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

const rowsSum = (matrix,callback) => callback(matrix.map(row => row.reduce((acc, item) => acc + item, 0)));