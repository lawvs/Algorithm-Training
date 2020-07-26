class Solution:
    def game(self, guess, answer):
        ans = 0
        for i in range(len(guess)):
            if guess[i] == answer[i]:
                ans += 1
        return ans
