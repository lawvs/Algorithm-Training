#!/usr/bin/env node
/**
 * leetcode #889 construct-binary-tree-from-preorder-and-postorder-traversal 根据前序和后序遍历构造二叉树
 * https://leetcode-cn.com/contest/weekly-contest-98/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    if (!pre || pre.length <= 0) {
        return null
    }
    if (pre.length === 1) {
        return new TreeNode(pre[0])
    }
    const root = new TreeNode(pre[0])

    const index = post.indexOf(pre[1])
    root.left = constructFromPrePost(
        pre.slice(1, index + 2),
        post.slice(0, index + 1)
    )
    root.right = constructFromPrePost(
        pre.slice(index + 2, pre.length),
        post.slice(index + 1, pre.length - 1)
    )
    return root
}

pre = [1, 2, 4, 5, 3, 6, 7]
post = [4, 5, 2, 6, 7, 3, 1]
ans = [1, 2, 3, 4, 5, 6, 7]
res = constructFromPrePost(pre, post)
