/*
 * leetcode #722 Remove Comments
 * https://leetcode-cn.com/problems/remove-comments/description/
 *
 * 创建时间：2018-3-19 12:14:05
 * 通过时间：2018-3-19 15:02:32
 */

class Solution {
public:
    vector<string> removeComments(vector<string>& source) {
        vector<string> v;
        bool inComment = false;
        string s;
        for (int i=0; i < source.size(); ++i) {
            int l = source[i].length();
            for (int j = 0; j < l; ++j) {
                if (!inComment) {
                    if (source[i][j] == '/' && j + 1 < l) {
                        if (source[i][j + 1] == '/') { // line comment
                            break;
                        } else if (source[i][j + 1] == '*') { // block comment
                            inComment = true;
                            ++j;
                            continue;
                        } else { // normal
                            s += source[i][j];
                            continue;
                        }
                    } else { // normal
                        s += source[i][j];
                        continue;
                    }
                } else if(inComment && j + 1 < l && source[i][j] == '*' && source[i][j + 1] == '/') {
                    inComment = false;
                    ++j;
                }
            }
            if (!inComment && s.length() > 0) {
                v.push_back(s);
                s = "";
            }
        }
        return v;
    }
};
