#!/usr/bin/env node
/**
 * leetcode #897 increasing-order-search-tree 递增顺序查找树
 * https://leetcode-cn.com/contest/weekly-contest-100/problems/increasing-order-search-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    if (!root) {
        return null
    }
    const nodeArr = []
    const dfs = node => {
        if (!node) {
            return
        }
        dfs(node.left)
        nodeArr.push(node)
        dfs(node.right)
    }
    dfs(root)
    // console.log(nodeArr.length)
    if (nodeArr.length === 1) {
        return nodeArr[0]
    }

    nodeArr.reduce((pre, cur) => {
        cur.left = null
        cur.right = null
        pre.left = null
        pre.right = new TreeNode(cur.val)
        return pre.right
    })
    return nodeArr[0]
}
