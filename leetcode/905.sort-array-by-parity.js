#!/usr/bin/env node
/**
 * leetcode #905 increasing-order-search-tree 按奇偶校验排序数组
 * https://leetcode-cn.com/contest/weekly-contest-102/problems/sort-array-by-parity/
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const arr = []
    A.forEach(n => {
        if (n % 2 === 0) {
            arr.push(n)
        }
    })
    A.forEach(n => {
        if (n % 2 === 1) {
            arr.push(n)
        }
    })
    return arr
}
