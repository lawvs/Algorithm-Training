#!/usr/bin/env node
/**
 * leetcode #746 min-cost-climbing-stairs 使用最小花费爬楼梯
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/description/
 * tag: dp
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = new Array(cost.length)
    // console.assert(dp.length >= 2)
    dp[0] = cost[0]
    dp[1] = cost[1]
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
    }
    return Math.min(dp[dp.length - 1], dp[dp.length - 2])
}
