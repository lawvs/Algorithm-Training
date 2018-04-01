/*
 * leetcode #15 3sum 三数之和
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * 创建时间：2018-4-1 18:34:26
 * 通过时间：2018-4-1 21:15:29
 * 优化时间：2018-4-2 00:45:41
 */

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ret;
        sort(nums.begin(), nums.end());
        const int len = nums.size();
        if (len < 3) {
            return ret;
        }
        for (int i = 0; i < len - 2; ++i) {
            if (nums[i] > 0) {
                // break;
                return ret;
            }
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            int j = i + 1;
            int k = len - 1;
            while(j < k) {
                if (j > i + 1 && nums[j] == nums[j - 1]) {
                    j++;
                    continue;
                }
                int sum = nums[i] + nums[j] + nums[k];
                if (sum == 0) {
                    vector<int> v;
                    v.push_back(nums[i]);
                    v.push_back(nums[j]);
                    v.push_back(nums[k]);
                    ret.push_back(v);
                    j++;
                    k--;
                } else if (sum > 0) {
                    k--;
                } else {
                    j++;
                }
            }
        }
        return ret;
    }
};