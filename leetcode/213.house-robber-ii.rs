use std::cmp::max;

impl Solution {
    pub fn rob(nums: Vec<i32>) -> i32 {
        if nums.len() == 1 {
            return nums[0];
        }
        let mut dp = vec![vec![0; 2]; nums.len()];
        dp[0][0] = 0;
        dp[0][1] = nums[0];
        for i in 1..(nums.len() - 1) {
            dp[i][0] = max(dp[i - 1][0], dp[i - 1][1]);
            dp[i][1] = dp[i - 1][0] + nums[i];
        }
        let curMax = max(dp[dp.len() - 2][0], dp[dp.len() - 2][1]);

        dp[0][1] = 0;
        for i in 1..nums.len() {
            dp[i][0] = max(dp[i - 1][0], dp[i - 1][1]);
            dp[i][1] = dp[i - 1][0] + nums[i];
        }
        // println!("{:?}", dp);
        return max(curMax, max(dp[dp.len() - 1][0], dp[dp.len() - 1][1]));
    }
}
