/*
 * leetcode #5 longest-palindromic-substring 最长回文子串
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * 创建时间：2018-3-18 03:01:43
 * 通过时间：2018-3-18 04:26:32
 */

class Solution {
public:
    string longestPalindrome(string s) {
        string maxs;

        int l = s.length();
        for (int i = 0; i < l; i++) {
            string tmps;
            tmps = s[i];
            int ind = 1;
            while( i - ind >= 0 && i + ind < l && s[i - ind] == s[i + ind]) {
                tmps = s[i - ind] + tmps + s[i + ind];
                ++ind;
            }
            if ( tmps.length() > maxs.length()) {
                maxs = tmps;
            }

            string tmps;
            int ind = 0;
            while( i - ind >= 0 && i + ind +1 < l && s[i - ind] == s[i + ind + 1]) {
                tmps = s[i - ind] + tmps + s[i + ind + 1];
                ++ind;
            }
            if ( tmps.length() > maxs.length()) {
                maxs = tmps;
            }
        }
        return maxs;
    }
};
