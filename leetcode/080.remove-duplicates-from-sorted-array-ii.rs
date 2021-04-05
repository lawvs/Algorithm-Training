impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut p = 1;
        let mut cur = nums[0];
        let mut flag = false;
        for i in 1..nums.len() {
            if nums[i] != cur {
                nums[p] = nums[i];
                cur = nums[p];
                flag = false;
                p += 1;
            } else if flag == false {
                nums[p] = nums[i];
                flag = true;
                p += 1;
            }
        }
        return p as i32;
    }
}
