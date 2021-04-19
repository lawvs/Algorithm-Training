impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut p1 = 0;
        let mut p2 = 0;
        while p2 < nums.len() {
            if nums[p2] != val {
                nums[p1] = nums[p2];
                p1 += 1;
            }
            p2 += 1;
        }
        return p1 as i32;
    }
}
