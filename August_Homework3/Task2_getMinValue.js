// Task 2.

// Տրված է թվերի մատրիցա (nxm), դուրս բերել բոլոր տողերի մինիմումներից բաղկացած զանգվածը:

// Variant 1.

const getMinValue = function(row) {
    let minValue = row[0];
    
    for (let i = 0; i < row.length; ++i)
        if (minValue > row[i])
            minValue = row[i];
    
    return minValue;
}

const getMinValuesArray = (matrix, callback) => matrix.map(callback);

// Variant 2.

const getMinValuesArray2 = (matrix, callback) => matrix.map(row => row.find(item => item === Math.min(...row)));