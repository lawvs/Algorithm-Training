class Solution {
public:
    vector<vector<int>> largeGroupPositions(string S) {
        vector<vector<int>> ret;
        int count = 1;
        int start = 0;
        int len = S.length();
        for (int i = 1; i < len; ++i) {

            if (S[i] == S[i - 1]) {
                ++count;
                continue;
            }
            if (count < 3) {
                count = 1;
                start = i;
                continue;
            }
            vector<int> v;
            v.push_back(start);
            v.push_back(i - 1);
            ret.push_back(v);

            start = i;
            count = 1;
        }
        if (count >= 3) {
            vector<int> v;
            v.push_back(start);
            v.push_back(len - 1);
            ret.push_back(v);
        }
        return ret;
    }
};