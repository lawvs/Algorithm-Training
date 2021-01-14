func prefixesDivBy5(A []int) []bool {
  ans := []bool{}
  cur := 0
  for _, v := range A {
    cur = (cur << 1 + v) % 5
    ans = append(ans, cur == 0)
  }
  return ans
}