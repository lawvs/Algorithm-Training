/*
 * leetcode #840 magic-squares-in-grid 矩阵中的幻方
 * https://leetcode-cn.com/contest/weekly-contest-86/problems/magic-squares-in-grid/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let count = 0
    for (let i = 0; i + 2 < grid.length; i++) {
        for (let j = 0; j + 2 < grid[i].length; j++) {
            // valid
            let valid = true
            for (let m = i; m <= i + 2; m++) {
                for (let n = j; n <= j + 2; n++) {
                    if(grid[m][n] >= 10 || grid[m][n] <= 0){
                        valid = false
                        break;
                    }
                }
            }
            if (!valid) {
                continue
            }

            const a = grid[i][j]     + grid[i + 1][j]     + grid[i + 2][j]
            const b = grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1]
            const c = grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2]

            const d = grid[i][j]         + grid[i][j + 1]         + grid[i][j + 2]
            const e = grid[i + 1][j]     + grid[i + 1][j + 1]     + grid[i + 1][j + 2]
            const f = grid[i + 2][j]     + grid[i + 2][j + 1]     + grid[i + 2][j + 2]

            const g = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2]
            const h = grid[i + 2][j] + grid[i + 1][j + 1] + grid[i][j + 2]

            if (a === b && a === c && a === d && a === e && a === f && a === g && a === h) {
                count++
            }
            // console.log(a, b, c)
            // console.log(d, e, f)
            // console.log(g, h)
        }
    }
    return count
};


// const input = [[7,6,2,2,4],[4,4,9,2,10],[9,7,8,3,10],[8,1,9,7,5],[7,10,4,11,6]]
// const res = numMagicSquaresInside(input)
// console.log(res)
