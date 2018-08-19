#!/usr/bin/env node
/**
 * leetcode #885 spiral-matrix-iii 螺旋矩阵 III
 * https://leetcode-cn.com/contest/weekly-contest-97/problems/spiral-matrix-iii/
 */

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
    const shiftX = 100
    const shiftY = 100
    const m = new Array(300).fill(0).map(a => new Array(300).fill(0))

    for (let i = shiftX; i < shiftX + R; i++) {
        for (let j = shiftY; j < shiftY + C; j++) {
            m[i][j] = 1
        }
    }

    const ret = []
    const total = R * C
    let l = 0
    let cnt = 1
    let i = r0 + shiftX
    let j = c0 + shiftY
    ret.push([i - shiftX, j - shiftY])
    while (cnt < total) {
        l++
        // right
        for (let c = 0; c < l; ++c) {
            ++j
            console.assert(m[i][j] !== -1)
            if (m[i][j] === 1) {
                ret.push([i - shiftX, j - shiftY])
                cnt++
            }
            m[i][j] = -1
            if (cnt >= total) return ret
        }

        // down
        for (let c = 0; c < l; ++c) {
            ++i
            console.assert(m[i][j] !== -1)
            if (m[i][j] === 1) {
                ret.push([i - shiftX, j - shiftY])
                cnt++
            }
            m[i][j] = -1
            if (cnt >= total) return ret
        }

        l++
        // left
        for (let c = 0; c < l; ++c) {
            --j
            console.assert(m[i][j] !== -1)
            if (m[i][j] === 1) {
                ret.push([i - shiftX, j - shiftY])
                cnt++
            }
            m[i][j] = -1
            if (cnt >= total) return ret
        }

        // up
        for (let c = 0; c < l; ++c) {
            --i
            console.assert(m[i][j] !== -1)
            if (m[i][j] === 1) {
                ret.push([i - shiftX, j - shiftY])
                cnt++
            }
            m[i][j] = -1
            if (cnt >= total) return ret
        }
    }
    return ret
}

let R
let C
let r0
let c0
let res
let ans

R = 1
C = 4
r0 = 0
c0 = 0

res = spiralMatrixIII(R, C, r0, c0)
ans = [[0, 0], [0, 1], [0, 2], [0, 3]]
console.assert(JSON.stringify(res) === JSON.stringify(ans), res, ans)

R = 5
C = 6
r0 = 1
c0 = 4
res = spiralMatrixIII(R, C, r0, c0)
ans = [
    [1, 4],
    [1, 5],
    [2, 5],
    [2, 4],
    [2, 3],
    [1, 3],
    [0, 3],
    [0, 4],
    [0, 5],
    [3, 5],
    [3, 4],
    [3, 3],
    [3, 2],
    [2, 2],
    [1, 2],
    [0, 2],
    [4, 5],
    [4, 4],
    [4, 3],
    [4, 2],
    [4, 1],
    [3, 1],
    [2, 1],
    [1, 1],
    [0, 1],
    [4, 0],
    [3, 0],
    [2, 0],
    [1, 0],
    [0, 0]
]
console.assert(JSON.stringify(res) === JSON.stringify(ans), res, ans)

console.log('All test cases passed.')
