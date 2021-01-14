package leetcode
func largeGroupPositions(s string) [][]int {
  var ans [][]int
  var cur rune
  start := -1
  for pos, char := range s {
    if char != cur {
      if pos - start >= 3 {
        ans = append(ans, []int{start, pos - 1})
      }
      cur = char
      start = pos
    }
  }
  if len(s) - start >= 3 {
    ans = append(ans, []int{start, len(s) - 1})
  }
  return ans
}