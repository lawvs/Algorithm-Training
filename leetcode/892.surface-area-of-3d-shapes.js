/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let ret = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // console.log(grid[i][j]) // DEBUG
            if (grid[i][j] > 0) {
                ret += 2
                const h = grid[i][j]
                if (i - 1 < 0) ret += h
                else if (h > grid[i - 1][j]) ret += h - grid[i - 1][j]
                if (j - 1 < 0) ret += h
                else if (h > grid[i][j - 1]) ret += h - grid[i][j - 1]
                if (i + 1 >= grid.length) ret += h
                else if (h > grid[i + 1][j]) ret += h - grid[i + 1][j]
                if (j + 1 >= grid[i].length) ret += h
                else if (h > grid[i][j + 1]) ret += h - grid[i][j + 1]
            }
        }
    }
    return ret
}

// console.assert = console.log // DEBUG MODE

input = [[2]]
ans = 10
ret = surfaceArea(input)
console.assert(ans === ret, `expected ${ans} but ${ret}`)

input = [[1, 2]]
ans = 14
ret = surfaceArea(input)
console.assert(ans === ret, `expected ${ans} but ${ret}`)

input = [[1, 2], [3, 4]]
ans = 34
ret = surfaceArea(input)
console.assert(ans === ret, `expected ${ans} but ${ret}`)

input = [[1, 0], [0, 2]]
ans = 16
ret = surfaceArea(input)
console.assert(ans === ret, `expected ${ans} but ${ret}`)

input = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
ans = 32
ret = surfaceArea(input)
console.assert(ans === ret, `expected ${ans} but ${ret}`)

input = [[2, 2, 2], [2, 1, 2], [2, 2, 2]]
ans = 46
ret = surfaceArea(input)
console.assert(ans === ret, `expected ${ans} but ${ret}`)

console.log('All test cases passed!')
