#!/usr/bin/env node
/**
 * leetcode #888 fair-candy-swap 公平的糖果交换
 * https://leetcode-cn.com/contest/weekly-contest-98/problems/fair-candy-swap/
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    const m = new Map()
    let sum1 = A.reduce((x, y) => x + y)
    let sum2 = B.reduce((x, y) => {
        m.set(y, 1)
        return x + y
    }, 0)

    const delta = (sum2 - sum1) / 2
    console.log(delta)
    for (let s of A) {
        if (m.has(s + delta)) {
            return [s, s + delta]
        }
    }
    throw new Error()
}

A = [1, 1]
B = [2, 2]
res = fairCandySwap(A, B)
