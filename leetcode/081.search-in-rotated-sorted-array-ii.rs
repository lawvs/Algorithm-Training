impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> bool {
        let mut left = 0;
        let mut right = nums.len() - 1;
        if nums[left] == target || nums[right] == target {
            return true;
        }

        while left < right {
            let mid = (left + right) / 2;
            if nums[left] == target || nums[mid] == target || nums[right] == target {
                return true;
            }
            //    /|
            // ---  -
            // l m   r
            if nums[left] == nums[mid] && nums[mid] == nums[right] {
                right -= 1;
                left += 1;
                continue;
            }
            //   /| /
            //  / |/
            // l m   r
            if nums[left] <= nums[mid] {
                if nums[left] < target && nums[mid] > target {
                    right = mid;
                } else {
                    left = mid + 1;
                }
                continue;
            }
            //   /| /
            //  / |/
            // l    m r
            if nums[mid] <= nums[right] {
                if nums[mid] < target && nums[right] > target {
                    left = mid + 1;
                } else {
                    right = mid;
                }
                continue;
            }
            panic!("Unreachable! {:?} {} {} {}", nums, left, mid, right);
        }
        return false;
    }
}
