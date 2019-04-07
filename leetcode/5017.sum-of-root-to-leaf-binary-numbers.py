# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def sumRootToLeaf(self, root: TreeNode) -> int:
        MAGIC = 1e9+7
        l = []

        def dfs(node, l, seq):
            if not node:
                return
            seq += str(node.val)
            if not node.left and not node.right:
                l.append(seq)
                return
            dfs(node.left, l, seq)
            dfs(node.right, l, seq)
        dfs(root, l, '')
        # print(l)
        # l = list(map(lambda s: int(s, 2), l))
        ret = 0
        for s in l:
            t = 0
            rs = s[::-1]
            for c in range(0, len(rs)):
                t += 2 ** c * int(rs[c]) % MAGIC
            ret += int(t % MAGIC)
            ret = int(ret % MAGIC)
        # print(l)
        return ret
