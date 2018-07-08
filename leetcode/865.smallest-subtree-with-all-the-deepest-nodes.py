#!/usr/bin/env python3
'''
leetcode #865 smallest-subtree-with-all-the-deepest-nodes 具有所有最深结点的最小子树
https://leetcode-cn.com/contest/weekly-contest-92/problems/smallest-subtree-with-all-the-deepest-nodes/
'''

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    depMap = None
    maxDep = 0

    def buildTree(self, root, dep=0):
        if root == None:
            return
        if dep >= self.maxDep:
            self.maxDep = dep
            l = self.depMap.get(dep, [])
            l.append(root)
            self.depMap[dep] = l
            # print(dep, root.val)

        if root.left:
            root.left.parent = root
            root.left.deep = dep + 1
            self.buildTree(root.left, dep + 1)
        if root.right:
            root.right.parent = root
            root.right.deep = dep + 1
            self.buildTree(root.right, dep + 1)

    def deepestNodeAncestor(self, l):
        if not l:
            return None
        if len(l) < 1:
            return None
        if len(l) == 1:
            return l[0]
        nl = []
        eq = True
        for node in l:
            if node != l[0]:
                eq = False
                break
        if eq:
            return l[0]
        for node in l:
            if not node:
                continue
            nl.append(node.parent)
        return self.deepestNodeAncestor(nl)

    def subtreeWithAllDeepest(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        self.depMap = {}
        self.maxDep = 0
        TreeNode.parent = None
        TreeNode.deep = None
        self.buildTree(root)
        # print(self.maxDep)
        # print(self.depMap.get(self.maxDep))
        res = self.deepestNodeAncestor(self.depMap.get(self.maxDep))
        # print(res)
        return res
