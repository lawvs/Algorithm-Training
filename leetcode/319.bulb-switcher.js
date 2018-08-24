#!/usr/bin/env node
/*
 * leetcode #319 bulb-switcher 灯泡开关
 * https://leetcode-cn.com/problems/bulb-switcher/description/
 */

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n))
}

// TLE
var soultion2 = function(n) {
    if (n === 0) {
        return 0
    }
    let ans = 0
    const arr = new Array(n + 1).fill(true)
    const len = arr.length
    for (let i = 2; i < len; i++) {
        if (i > len / 2) {
            !arr[i] && ans++
            continue
        }
        for (let j = i; j < len; j += i) {
            arr[j] = !arr[j]
        }
        arr[i] && ans++
    }
    return ans + 1
}

// console.assert = console.log // debug

// for (let i = 0; i <= 100; i++) {
//     console.log(i, bulbSwitch(i))
// }

n = 0
res = bulbSwitch(n)
ans = 0
console.assert(res === ans, res, ans)

n = 1
res = bulbSwitch(n)
ans = 1
console.assert(res === ans, res, ans)

n = 2
res = bulbSwitch(n)
ans = 1
console.assert(res === ans, res, ans)

n = 3
res = bulbSwitch(n)
ans = 1
console.assert(res === ans, res, ans)

n = 4
res = bulbSwitch(n)
ans = 2
console.assert(res === ans, res, ans)

n = 5
res = bulbSwitch(n)
ans = 2
console.assert(res === ans, res, ans)

n = 10
res = bulbSwitch(n)
ans = 3
console.assert(res === ans, res, ans)

t0 = process.hrtime()
n = 9999999
res = bulbSwitch(n)
ans = 3162
console.assert(res === ans, res, ans)
t1 = process.hrtime(t0)
time = t1[0]
console.assert(time < 1, 'Time Limit Exceeded', time)

console.log('All test cases passed.')
