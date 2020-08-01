func findMagicIndex(nums []int) int {
	for i := 0; i < len(nums); i++ {
		if i == nums[i] {
			return i
		}
		if nums[i] > i {
			i = nums[i] - 1
		}
	}
	return -1
}
