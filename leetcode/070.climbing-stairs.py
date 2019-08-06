class Solution:

    # memory search
    m = {}
    def climbStairs(self, n: int) -> int:
        if n == 1: return 1
        if n == 2: return 2
        if n in self.m: return self.m[n]
        count = self.climbStairs(n - 1) + self.climbStairs(n - 2)
        self.m[n] = count
        return count

    # dp
    def climbStairs2(self, n: int) -> int:
        if n == 1: return 1
        if n == 2: return 2

        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 2
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]
