#!/usr/bin/env node
/**
 * leetcode #890 find-and-replace-pattern 查找和替换模式
 * https://leetcode-cn.com/contest/weekly-contest-98/problems/find-and-replace-pattern/
 */

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const res = []
    words.forEach(w => {
        // console.assert(w.length === pattern.length)
        const m = new Map()
        const mr = new Map()
        for (let i = 0; i < pattern.length; i++) {
            if (!m.has(pattern[i])) {
                m.set(pattern[i], w[i])
            } else if (m.get(pattern[i]) !== w[i]) {
                return
            }

            if (!mr.has(w[i])) {
                mr.set(w[i], pattern[i])
            } else if (mr.get(w[i]) !== pattern[i]) {
                return
            }
        }
        res.push(w)
    })
    return res
}

words = ['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc']
pattern = 'abb'

res = findAndReplacePattern(words, pattern)
ans = ['mee', 'aqq']
console.assert(JSON.stringify(res) === JSON.stringify(ans), res, ans)

console.log('All test cases passed.')
