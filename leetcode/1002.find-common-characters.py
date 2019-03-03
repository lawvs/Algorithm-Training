from collections import defaultdict

class Solution:
    def commonChars(self, A: List[str]) -> List[str]:
      if len(A) == 1:
        return list(A)

      d = defaultdict(lambda: 0)
      for i in A[1]:
        d[i] += 1

      for s in A:
        td = defaultdict(lambda: 0)
        for c in s:
          if d[c] > 0 and d[c] > td[c]:
            td[c] += 1
        d = td

      ans = []
      for (k, v) in d.items():
        for i in range(v):
          ans.append(k)
      return ans

A = ["bella","label","roller"]
s = Solution()
ret = s.commonChars(A)
print(ret)