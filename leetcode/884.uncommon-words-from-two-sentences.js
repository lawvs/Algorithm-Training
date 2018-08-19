#!/usr/bin/env node
/**
 * leetcode #884 uncommon-words-from-two-sentences 两句话中的不常见单词
 * https://leetcode-cn.com/contest/weekly-contest-97/problems/uncommon-words-from-two-sentences/
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const m1 = new Map()
    m1.set(0, 0)
    const m2 = new Map()
    m2.set(0, 0)
    const ret = []
    A.split(' ').forEach(e => {
        const cnt = m1.has(e) ? m1.get(e) : m1.get(0)
        m1.set(e, cnt + 1)
    })
    B.split(' ').forEach(e => {
        const cnt = m2.has(e) ? m2.get(e) : m2.get(0)
        m2.set(e, cnt + 1)
    })

    m1.forEach((v, k) => {
        if (v < 2 && !m2.has(k)) {
            ret.push(k)
        }
    })

    m2.forEach((v, k) => {
        if (v < 2 && !m1.has(k)) {
            ret.push(k)
        }
    })
    return ret
}

let A
let B
let ans

A = 'this apple is sweet'
B = 'this apple is sour'

ans = uncommonFromSentences(A, B)
console.log(ans)
