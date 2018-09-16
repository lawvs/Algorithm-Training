#!/usr/bin/env node
/**
 * leetcode #904 fruit-into-baskets 水果成篮
 * https://leetcode-cn.com/contest/weekly-contest-102/problems/fruit-into-baskets/
 */
/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    let start1 = [0, tree[0]]
    let start2
    let pos = 1
    while (pos < tree.length && tree[pos] === start1[1]) pos++
    if (pos === tree.length) {
        return tree.length
    }
    start2 = [pos, tree[pos]]
    // console.log(start1, start2)
    let change = start2
    let max = 0
    for (let i = pos; i < tree.length; i++) {
        if (tree[i] !== start1[1] && tree[i] !== start2[1]) {
            // console.log(start1, start2, i, tree[i], i - start1[0])
            max = Math.max(max, i - start1[0])
            start1 = change
            start2 = [i, tree[i]]
        }
        if (change[1] !== tree[i]) {
            change = [i, tree[i]]
        }
    }
    max = Math.max(max, tree.length - start1[0])
    return max
}

tree = [1, 2, 1]
ret = totalFruit(tree)
ans = 3
console.assert(ret === ans, ret, ans)

tree = [0, 1, 2, 2]
ret = totalFruit(tree)
ans = 3
console.assert(ret === ans, ret, ans)

tree = [1, 2, 3, 2, 2]
ret = totalFruit(tree)
ans = 4
console.assert(ret === ans, ret, ans)

tree = [1, 0, 1, 2, 1, 1]
ret = totalFruit(tree)
ans = 4
console.assert(ret === ans, ret, ans)

tree = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
ret = totalFruit(tree)
ans = 5
console.assert(ret === ans, ret, ans)

console.log('All test cases passed.')
