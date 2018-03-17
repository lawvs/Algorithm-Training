/*
 * leetcode #5 longest-palindromic-substring 最长回文子串
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * 创建时间：2018-3-18 03:01:43
 * 通过时间：2018-3-18 04:26:32
 * 优化时间：2018-3-18 05:30:22
 */

class Solution {
public:
    string longestPalindrome(string s) {
        int maxLen = 0;
        int retInd = 0;
        int startInd;
        int endInd;
        int tmpl;

        int l = s.length();
        for (int i = 0; i < l; i++) {
            startInd = i - 1;
            endInd = i + 1;
            while( startInd >= 0 && endInd < l && s[startInd] == s[endInd]) {
                --startInd;
                ++endInd;
            }
            tmpl = endInd - startInd - 2;
            if (tmpl > maxLen ) {
                maxLen = tmpl;
                retInd = startInd + 1;
            }

            startInd = i;
            endInd = i + 1;
            while( startInd >= 0 && endInd < l && s[startInd] == s[endInd]) {
                --startInd;
                ++endInd;
            }
            tmpl = endInd - startInd - 2;
            if (tmpl > maxLen ) {
                maxLen = tmpl;
                retInd = startInd + 1;
            }
        }
        return s.substr(retInd, maxLen + 1);
    }
};
