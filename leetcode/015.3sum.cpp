/*
 * leetcode #15 3sum 三数之和
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * 创建时间：2018-4-1 18:34:26
 * 通过时间：2018-4-1 21:15:29
 */

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        map<int, int> m;
        vector<vector<int>> ret;
        const int len = nums.size();
        if (len < 3) {
            return ret;
        }
        for (int i = 0; i < len; ++i) {
            m.find(nums[i]) != m.end()? m[nums[i]]++ : m[nums[i]] = 1;
        }
        // 0
        map<int, int>::iterator pos0 = m.find(0);
        if (pos0 != m.end() && (*pos0).second >= 3) {
            vector<int> v;
            v.push_back(0);
            v.push_back(0);
            v.push_back(0);
            ret.push_back(v);
        }

        for(map<int, int>::iterator i = m.begin(); next(i, 1) != m.end(); i++) {
            for(map<int, int>::iterator j = next(i, 1); j != m.end(); j++) {
                int twoSum = -1 * ((*i).first + (*j).first);
                if (twoSum !=(*i).first && twoSum < (*j).first) {
                    continue;
                }
                map<int, int>::iterator threePos = m.find(twoSum);
                if (threePos != m.end() && (*threePos).second > 0) {
                    if (threePos == i && (*i).second < 2) {
                        continue;
                    }
                    if (threePos == j && (*j).second < 2) {
                        continue;
                    }
                    vector<int> v;
                    v.push_back((*i).first);
                    v.push_back((*j).first);
                    v.push_back(twoSum);
                    ret.push_back(v);
                }
            }
         }
        return ret;
    }
};
