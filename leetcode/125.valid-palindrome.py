class Solution:
    def isPalindrome(self, s: str) -> bool:
        return ''.join(map(lambda c: c.upper(), filter(lambda a: a.isalnum(), list(s)))) == ''.join(list(map(lambda c: c.upper(), filter(lambda a: a.isalnum(), list(s))))[::-1])
