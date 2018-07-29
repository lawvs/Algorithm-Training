#!/usr/bin/env node
/**
 * leetcode #877 stone-game 石子游戏
 * https://leetcode-cn.com/contest/weekly-contest-95/problems/stone-game/
 */

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const len = piles.length
    // console.assert(len % 2 === 0);

    if (len <= 1) {
        return true
    }
    const dp = new Array(len).fill(0).map(a => new Array(len + 1).fill(0))
    // dp[i][j] : piles[i:j]
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = i; j < dp[i].length; j++) {
            if (i >= j) {
                dp[i][j] = 0
                continue
            }
            if ((j - i) % 2 === len % 2) {
                dp[i][j] = Math.max(dp[i + 1][j] + piles[i], dp[i][j - 1] + piles[j - 1])
            } else {
                dp[i][j] = Math.min(dp[i + 1][j] - piles[i], dp[i][j - 1] - piles[j - 1])
            }
        }
    }
    // console.table(dp);
    // console.log(dp[0][len]);
    // console.assert(dp[0][len] !== 0)
    return dp[0][len] > 0
};

/**
 * @param {number[]} piles
 * @return {boolean}
 */
stoneGame = piles => true


let piles
let res

piles = [5,3,4,5]
res = stoneGame(piles)
ans = true
console.assert(res === ans)

piles = [6,3,9,9,3,8,8,7]
res = stoneGame(piles)
ans = true
console.assert(res === ans)

console.log('All test cases passed.')
