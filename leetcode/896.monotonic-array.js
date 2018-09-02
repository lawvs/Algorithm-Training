#!/usr/bin/env node
/**
 * leetcode #896 monotonic-array 单调数列
 * https://leetcode-cn.com/contest/weekly-contest-100/problems/monotonic-array/
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    const ins = A.reduce((pre, cur) => {
        if (pre === false) {
            return false
        }
        if (pre >= cur) {
            return cur
        }
        return false
    })
    const des = A.reduce((pre, cur) => {
        if (pre === false) {
            return false
        }
        if (pre <= cur) {
            return cur
        }
        return false
    })
    console.log(ins, des)
    return ins !== false || des !== false
}

// TEST
isMonotonic([1, 3, 2, 4]) // false
isMonotonic([0, 1, 3]) // true
