/*
 * leetcode #8 string-to-integer-atoi 字符串转整数
 * https://leetcode-cn.com/problems/string-to-integer-atoi/description/
 *
 * 创建时间：2018-3-23 20:03:42
 * 通过时间：2018-3-24 00:00:34
 */

class Solution {
public:
    int myAtoi(string str) {
        int ret = 0;
        int negative = 1;
        int l = str.length();
        int pos = 0;
        // blank
        while(pos < l && str[pos] == ' ') {
            ++pos;
        }
        // negative
        if (pos < l && str[pos] == '-') {
            negative = -1;
            ++pos;
        }
        // ignore positive
        if (pos < l && negative == 1 && str[pos] == '+') {
            ++pos;
        }
        while(pos < l && str[pos] == '0') {
            ++pos;
        }
        if (str[pos] > '0' && str[pos] <= '9') {
            ret = negative * (str[pos] - '0');
            ++pos;
        }
        while (pos < l) {
            // exception
            if (str[pos] < '0' || str[pos] > '9') {
                return ret;
            }
            // overflow
            int tmp = ret;
            int dig = str[pos] - '0';
            ret = ret * 10 + (negative * dig);
            if (ret / 10 != tmp) {
                return tmp > 0 ? INT_MAX : INT_MIN;
            }
            ++pos;
        }
        return ret;
    }
};
