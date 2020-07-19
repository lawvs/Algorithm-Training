import collections


class Solution:
    def countSubTrees(self, n: int, edges: List[List[int]], labels: str) -> List[int]:
        tree = collections.defaultdict(list)
        for f, t in edges:
            tree[f].append(t)
            tree[t].append(f)

        ans = [0] * n

        def dfs(node, parent):
            d = collections.Counter()
            d[labels[node]] = 1
            for child in tree[node]:
                if child == parent:
                    continue
                dc = dfs(child, node)
                for la in dc:
                    d[la] += dc[la]
            ans[node] = d[labels[node]]
            return d

        dfs(0, None)
        return ans
