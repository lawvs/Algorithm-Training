#!/usr/bin/env python3
'''
leetcode #863 all-nodes-distance-k-in-binary-tree 二叉树中所有距离为 K 的结点
https://leetcode-cn.com/contest/weekly-contest-91/problems/all-nodes-distance-k-in-binary-tree/
'''

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    ls = None

    def buildTree(self, root):
        if root == None:
            return
        if root.left:
            root.left.parent = root
            self.buildTree(root.left)
        if root.right:
            root.right.parent = root
            self.buildTree(root.right)

    def dfsTree(self, node, K, fromNode):
        if node == None:
            return
        if K < 0:
            return
        if K == 0:
            self.ls.append(node.val)
            return
        if node.parent != fromNode:
            self.dfsTree(node.parent, K - 1, node)
        if node.left != fromNode:
            self.dfsTree(node.left, K - 1, node)
        if node.right != fromNode:
            self.dfsTree(node.right, K - 1, node)

    def distanceK(self, root, target, K):
        """
        :type root: TreeNode
        :type target: TreeNode
        :type K: int
        :rtype: List[TreeNode]
        """
        # init
        TreeNode.parent = None
        self.buildTree(root)

        self.ls = []
        self.dfsTree(target, K, None)
        return self.ls
