/*
 * leetcode #3 longest-substring-without-repeating-characters 无重复字符的最长子串
 * https://leetcodechina.com/problems/longest-substring-without-repeating-characters/description/
 *
 * 创建时间：2018-3-16 01:32:10
 * 通过时间：2018-3-16 02:34:59
 */

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int pos = 0;
        int len = 0;
        int max = 0;
        map<char, int> map;

        for (int i = 0; i < s.length(); ++i) {
            if (map[s[i]] > 0) { // 重复
                if (len > max) {
                    max = len;
                }
                while(pos < map[s[i]]) {
                    map[s[pos++]] = 0;
                }
                // pos = map[s[i]] + 1;
                len = i - pos;
            }
            map[s[i]] = i + 1; // index
            ++len;
        }
        return max > len ? max : len; // max(max, len)
    }
};
