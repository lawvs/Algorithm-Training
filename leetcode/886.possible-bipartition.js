#!/usr/bin/env node
/**
 * leetcode #886 possible-bipartition 可能的二分法
 * https://leetcode-cn.com/contest/weekly-contest-97/problems/possible-bipartition/
 */

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    const arr = new Array(N + 1).fill(0).map(a => new Array())
    dislikes.forEach(pairs => {
        arr[pairs[0]].push(pairs[1])
        arr[pairs[1]].push(pairs[0])
    })

    const group = new Map()

    const dfs = (i, g) => {
        if (group.has(i)) {
            if (group.get(i) !== g) {
                return false
            }
            return true
        }
        group.set(i, g)

        return arr[i].every(dislike => dfs(dislike, !g))
    }

    let flag = true
    for (let i = 0; i < arr.length; i++) {
        const m = arr[i]
        if (m.length <= 0) continue
        if (group.has(i)) continue
        if (!dfs(i, true)) {
            return false
        }
    }
    return true
}

let N
let dislikes
let res
let ans

N = 4
dislikes = [[1, 2], [1, 3], [2, 4]]
res = possibleBipartition(N, dislikes)
ans = true
console.assert(res === ans, res, ans)

N = 3
dislikes = [[1, 2], [1, 3], [2, 3]]
res = possibleBipartition(N, dislikes)
ans = false
console.assert(res === ans, res, ans)

N = 5
dislikes = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]
res = possibleBipartition(N, dislikes)
ans = false
console.assert(res === ans, res, ans)

console.log('All test cases passed.')
