package leetcode

func checkPossibility(nums []int) bool {
	flag := 0
	for i := 1; i < len(nums)-1; i++ {
		// \
		//  \
		if nums[i-1] > nums[i] && nums[i] > nums[i+1] {
			return false
		}
		//  /
		// /
		if nums[i-1] <= nums[i] && nums[i] <= nums[i+1] {
			continue
		}
		if flag != 0 {
			return false
		}
		// |
		// |\/
		if nums[i-1] > nums[i] {
			flag++
			continue
		}
		//  /\
		// /
		if nums[i-1] <= nums[i+1] {
			nums[i] = nums[i-1]
			flag++
			continue
		}
		// /\
		//   \
		nums[i+1] = nums[i]
		flag++
	}
	return flag <= 1
}
