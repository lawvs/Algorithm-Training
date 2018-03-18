/*
 * leetcode #6 zigzag-conversion Z字形转换
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * 创建时间：2018-3-18 17:58:38
 * 通过时间：2018-3-18 19:30:44
 */

class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1) {
            return s;
        }
        string ret;
        for (int i = 0; i < numRows; ++i) {
            for (int j = i;; j += numRows * 2 - 2) {
                if (i != 0 && i != numRows - 1 && (j - i * 2) >= 0 && (j - i * 2) < s.length()) {
                    ret += s[j - i * 2];
                }
                if (j >= s.length()) {
                    break;
                }
                ret += s[j];
            }
        }
        return ret;
    }
};
