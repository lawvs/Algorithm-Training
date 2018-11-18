class Solution:
    def validMountainArray(self, A):
        """
        :type A: List[int]
        :rtype: bool
        """
        flag = True
        for i in range(1, len(A)):
            if flag and A[i] > A[i-1]:
                continue
            elif i > 1 and flag and A[i] < A[i-1]:
                flag = False
            elif not flag and A[i] < A[i-1]:
                continue
            else:
                return False
        return not flag
