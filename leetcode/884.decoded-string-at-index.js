#!/usr/bin/env node
/**
 * leetcode #884 decoded-string-at-index 索引处的解码字符串
 * https://leetcode-cn.com/contest/weekly-contest-96/problems/decoded-string-at-index/
 */

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {
    const isNumberStr = n => n >= '0' && n <= '9'
    let len = S.split('').reduce((pre, cur) => {
        if (isNumberStr(cur)) {
            return (pre *= cur)
        }
        return ++pre
    }, 0)

    let pos = S.length - 1
    while (pos >= 0) {
        K %= len
        if (K === 0) {
            // while (isNumberStr(S[pos])) {
            //     pos--
            // }
            if (!isNumberStr(S[pos])) {
                return S[pos]
            }
        }

        if (isNumberStr(S[pos])) {
            len = Math.ceil(len / S[pos])
        } else {
            len--
        }
        pos--
    }
    throw new Error()
}

let S
let K

// debug mode
// console.assert = console.log

S = 'leet2code3'
K = 10
res = decodeAtIndex(S, K)
ans = 'o'
console.assert(ans === res, 'expected', ans, 'but', res)

S = 'ha22'
K = 5
res = decodeAtIndex(S, K)
ans = 'h'
console.assert(ans === res, 'expected', ans, 'but', res)

S = 'a234567899999999999999'
K = 1
res = decodeAtIndex(S, K)
ans = 'a'
console.assert(ans === res, 'expected', ans, 'but', res)

S = 'abc23456'
K = 2
res = decodeAtIndex(S, K)
ans = 'b'
console.assert(ans === res, 'expected', ans, 'but', res)

S = 'a2b3c4d5e6f7g8h9'
K = 9
res = decodeAtIndex(S, K)
ans = 'b'
console.assert(ans === res, 'expected', ans, 'but', res)

S =
    'jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt'
K = 731963130
res = decodeAtIndex(S, K)
ans = 'b'
console.assert(ans === res, 'expected', ans, 'but', res)
console.log('All test cases passed.')
