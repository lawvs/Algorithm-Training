'''
leetcode #839 similar-string-groups 相似字符串组
https://leetcode-cn.com/problems/similar-string-groups/description/
'''
class DisjointSet:
    parent = []
    rank = []

    def __init__(self, l):
        self.parent = [n for n in range(l)]
        self.rank = [0] * l

    def findRoot(self, w):
        if self.parent[w] == w:
            # self.parent[w] = w
            return w
        else:
            root = self.findRoot(self.parent[w])
            self.parent[w] = root # 路径压缩
            return root

    def union(self, w1, w2):
        root1 = self.findRoot(w1)
        root2 = self.findRoot(w2)
        if root1 == root2:
            return
        if self.rank[root1] < self.rank[root2]: # rank 合并
            tmp = root1
            root1 = root2
            root2 = tmp
        elif self.rank[root1] == self.rank[root2]:
            self.rank[root1] = self.rank[root1] + 1
        self.parent[root2] = root1 # union

    def isEqual(self, x, y):
        return self.findRoot(x) == self.findRoot(y)

    def count(self):
        cnt = 0
        l = len(self.parent)
        for i in range(l):
            if self.parent[i] == i:
                cnt = cnt + 1
        return cnt

class Solution:

    def isSimilar(self, w1, w2):
        # assert(len(w1) == len(w2))
        cnt = 0
        l = len(w1)
        for i in range(l):
            if w1[i] != w2[i]:
                cnt = cnt + 1
                if cnt > 2:
                    return False
        return True # cnt == 2

    def numSimilarGroups(self, A):
        """
        :type A: List[str]
        :rtype: int
        """
        # init
        l = len(A)
        s = DisjointSet(l)

        for i in range(l):
            for j in range(i + 1, l):
                if self.isSimilar(A[i], A[j]):
                    s.union(i, j)
        # print(s.parent)
        # print(s.rank)
        return s.count()

'''
if __name__ == '__main__':
    s = Solution()
    A = ["tars","rats","arts","star"]
    output = 2
    res = s.numSimilarGroups(A)
    print(res)
    assert(res == output)
'''
