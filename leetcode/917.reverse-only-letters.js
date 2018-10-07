#!/usr/bin/env node
/**
 * leetcode #917 reverse-only-letters 仅仅反转字母
 * https://leetcode-cn.com/contest/weekly-contest-105/problems/reverse-only-letters/
 */

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    const r = S.split('')
        .reverse()
        .filter(c => (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z'))
    let pos = 0
    let ans = ''
    for (let i = 0; i < S.length; i++) {
        if ((S[i] >= 'A' && S[i] <= 'Z') || (S[i] >= 'a' && S[i] <= 'z')) {
            ans += r[pos++]
        } else {
            ans += S[i]
        }
    }
    return ans
}

S = 'Czyr^'
ret = reverseOnlyLetters(S)
ans = 'ryzC^'
console.assert(ret === ans, ret, ans)
