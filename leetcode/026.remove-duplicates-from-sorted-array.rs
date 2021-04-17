impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        if nums.len() <= 1 {
            return nums.len() as i32;
        }
        let mut p1 = 1 as usize;
        let mut p2 = 1 as usize;
        let mut cur = nums[0];
        while p2 < nums.len() {
            if nums[p2] != cur {
                nums[p1] = nums[p2];
                p1 += 1;
            }
            cur = nums[p2];
            p2 += 1;
        }
        return p1 as i32;
    }
}
