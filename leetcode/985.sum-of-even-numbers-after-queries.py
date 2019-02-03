class Solution:
    def sumEvenAfterQueries(self, A: 'List[int]', queries: 'List[List[int]]') -> 'List[int]':
        sumEven = sum(filter(lambda n: n % 2 == 0, A))
        ans = []
        for i in range(0, len(queries)):
            qi = queries[i][1]
            if A[qi] % 2 != 0 and queries[i][0] % 2 != 0:
                sumEven += queries[i][0] + A[qi]
                A[qi] += queries[i][0]
                ans.append(sumEven)
                continue
            if A[qi] % 2 == 0 and queries[i][0] % 2 == 0:
                sumEven += queries[i][0]
                A[qi] += queries[i][0]
                ans.append(sumEven)
                continue
            if A[qi] % 2 == 0 and queries[i][0] % 2 != 0:
                sumEven -= A[qi]
                A[qi] += queries[i][0]
                ans.append(sumEven)
                continue
            if A[qi] % 2 != 0 and queries[i][0] % 2 == 0:
                ans.append(sumEven)
                A[qi] += queries[i][0]
                continue
        return ans
