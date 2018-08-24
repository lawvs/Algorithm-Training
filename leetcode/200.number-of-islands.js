#!/usr/bin/env node
/**
 * leetcode #200 number-of-islands 岛屿的个数
 * https://leetcode-cn.com/problems/number-of-islands/description/
 * tag: bfs
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let cnt = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== '1') continue
            cnt++
            const list = [[i, j]]
            while (list.length > 0) {
                const pos = list.shift()
                const x = pos[0]
                const y = pos[1]
                if (x < 0 || x >= grid.length) continue
                if (y < 0 || y >= grid[x].length) continue
                if (grid[x][y] === '1') {
                    grid[x][y] = '-1'
                    list.push([x + 1, y])
                    list.push([x - 1, y])
                    list.push([x, y + 1])
                    list.push([x, y - 1])
                }
            }
        }
    }
    return cnt
}
