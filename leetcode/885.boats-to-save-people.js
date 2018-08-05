#!/usr/bin/env node
/**
 * leetcode #885 boats-to-save-people 救生艇
 * https://leetcode-cn.com/contest/weekly-contest-96/problems/boats-to-save-people/
 */

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let res = 0
    people = people.sort((a, b) => a - b)
    let start = 0
    let end = people.length - 1

    while (start < end) {
        const total = people[start] + people[end]
        if (total <= limit) {
            start++
        }
        res++
        end--
    }
    if (start === end) {
        res++
    }
    return res
}

let people
let limit
let res

people = [3, 5, 3, 4]
limit = 5
res = numRescueBoats(people, limit)
ans = 4
console.assert(res === ans)

people = [44, 10, 29, 12, 49, 41, 23, 5, 17, 26]
limit = 50
res = numRescueBoats(people, limit)
ans = 6
console.assert(res === ans)

people = [27509, 23800, 2472, 18384, 14594, 18905, 25353, 7292, 21945, 3515]
limit = 30000
res = numRescueBoats(people, limit)
ans = 7
console.assert(res === ans)

console.log("All test cases passed.")
