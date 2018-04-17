/*
 * leetcode #9 palindrome-number  回文数
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * 通过时间：2018-4-17 14:43:47
 */

// number of digits
int getDigits(int x) {
    int digits = 1;
    while (x >= 10) {
        x/=10;
        ++digits;
    }
    return digits;
}

bool isPalindrome(int x) {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }

    int digits = getDigits(x) - 1;
    while (digits > 0) {
        if (x % 10 != x / (int) pow(10, digits)) {
            return false;
        }
        x = x % (int) pow(10, digits); // head--
        x = x / 10; // tail--
        digits = digits - 2;
    }
    return true;
}
