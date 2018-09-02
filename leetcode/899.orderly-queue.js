#!/usr/bin/env node
/**
 * leetcode #899 orderly-queue 有序队列
 * https://leetcode-cn.com/contest/weekly-contest-100/problems/orderly-queue/
 */

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var orderlyQueue = function(S, K) {
    if (!S) {
        return S
    }
    if (S.length <= 1) {
        return S
    }
    if (K > 1) {
        return S.split('')
            .sort()
            .join('')
    }
    let smallest = S
    for (let i = 0; i < S.length; i++) {
        S = S.slice(1) + S[0]
        if (S < smallest) {
            smallest = S
        }
        // console.log(S)
    }
    return smallest
}

S = 'cba'
K = 1
res = orderlyQueue(S, K)
ans = 'acb'
console.assert(res === ans, res, ans)

S = 'baaca'
K = 3
res = orderlyQueue(S, K)
ans = 'aaabc'
console.assert(res === ans, res, ans)

console.log('All test cases passed.')
