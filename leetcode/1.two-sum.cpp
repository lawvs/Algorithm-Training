/*
 * leetcode #1 two-sum 两数之和
 * https://leetcodechina.com/problems/two-sum/description/
 *
 * 创建时间：2018-3-13 23:30:49
 * 完成时间：2018-3-14 00:00:01
 */

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> m; // map 默认值为0
        vector<int> ret;
        // vector<int>::iterator it;//定义迭代器变量
        int size = nums.size();
        // for(it = nums.begin(); it != nums.end(); it++) { //用迭代器访问 vector 元素
        for (int i = 0; i < size; ++i) {
            if (m[target - nums[i]]){
                ret.push_back(m[target - nums[i]] - 1);
                ret.push_back(i);
                break;
            }
            m[nums[i]] = i + 1; // 区分 nums[0] 和未命中
        }
        return ret;
    }
};
