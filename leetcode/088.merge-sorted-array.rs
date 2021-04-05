impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        if n == 0 {
            return;
        }
        let mut p1 = (m - 1) as usize;
        let mut p2 = (n - 1) as usize;
        let mut i = nums1.len() - 1;

        while i >= 0 {
            if p1 >= usize::MAX || p2 >= usize::MAX {
                break;
            }

            if nums1[p1] > nums2[p2] {
                nums1[i] = nums1[p1];
                p1 -= 1;
            } else {
                nums1[i] = nums2[p2];
                p2 -= 1;
            }
            i -= 1;
        }
        while p2 < usize::MAX {
            nums1[i] = nums2[p2];
            p2 -= 1;
            i -= 1;
        }
    }
}
