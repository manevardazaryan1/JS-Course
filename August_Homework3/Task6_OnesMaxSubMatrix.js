// Task 6.

// Տրված է քառակսաձեւ մատրիցա (nxn) բաղկացած զրոներից եւ մեկերից. գտնել միայն
// մեկերից բաղկացած ամենամեծ ներդրված քառակուսաձեւ(kxk) մատրիցայի երկարությունը (k)։

const maxSubMatrix = function(matrix) {
    let res = 0;
    const dp = [];
    for (let i = 0; i < matrix.length; ++i) {
        dp[i] = [];
        for (let j = 0; j < matrix[i].length; ++j) {
            if (i == 0 || j === 0){
                dp[i][j] = matrix[i][j];
            } else {
                if (matrix[i][j] === 0) {
                    dp[i][j] = 0;
                } else {
                    dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j],dp[i-1][j-1]) + 1;
                    res = Math.max(res, dp[i][j]);
                }
            }
        }
    }
    return res;
}