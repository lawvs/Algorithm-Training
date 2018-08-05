#!/usr/bin/env node
/**
 * leetcode #887 projection-area-of-3d-shapes 三维形体投影面积
 * https://leetcode-cn.com/contest/weekly-contest-96/problems/projection-area-of-3d-shapes/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let x = 0
    let y = 0
    let z = 0

    for (let i = 0; i < grid.length; i++) {
        let maxX = 0
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j] > maxX && (maxX = grid[i][j])
            grid[i][j] > 0 && z++
        }
        x += maxX
    }

    for (let i = 0; i < grid.length; i++) {
        let maxY = 0
        for (let j = 0; j < grid[i].length; j++) {
            grid[j][i] > maxY && (maxY = grid[j][i])
        }
        y += maxY
    }
    // console.log(x, y, z)
    return x + y + z
}

let grid
let res

grid = [[2]]
res = projectionArea(grid)
ans = 5
console.assert(res === ans, res, ans)

grid = [[1, 0], [0, 2]]
res = projectionArea(grid)
ans = 8
console.assert(res === ans, res, ans)

console.log("All test cases passed.")
