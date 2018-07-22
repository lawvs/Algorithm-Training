#!/usr/bin/env node
/**
 * leetcode #873 length-of-longest-fibonacci-subsequence 最长的斐波那契子序列的长度
 * https://leetcode-cn.com/contest/weekly-contest-94/problems/length-of-longest-fibonacci-subsequence/
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
    const m = new Map()
    for (let i = 0; i < A.length; i++) {
        const num = A[i];
        m.set(num, i)
    }
    // console.log(m)

    maxLen = 0
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            let num1 = A[i]
            let num2 = A[j]
            let num3ind = m.get(num1 + num2)
            let len = 2
            while (num3ind > 0) {
                len++
                num1 = num2
                num2 = A[num3ind]
                num3ind = m.get(num1 + num2)
            }
            if (len < 3) {
                continue
            }
            maxLen = Math.max(maxLen, len)
        }
    }
    return maxLen
};


let A
let res

A = [1,2,3,4,5,6,7,8]
res = lenLongestFibSubseq(A)
console.log(res)

A = [1,3,7,11,12,14,18]
res = lenLongestFibSubseq(A)
console.log(res)

A = [[1,3,5]]
res = lenLongestFibSubseq(A)
console.log(res)
