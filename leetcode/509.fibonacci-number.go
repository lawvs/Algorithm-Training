package leetcode
var m = make(map[int]int)

func fib(n int) int {
  if m[n] != 0 {
    return m[n]
  }
  if n == 0 {
    return 0
  }
  if n == 1 {
    return 1
  }
  ans := fib(n - 1) + fib(n - 2)
  m[n] = ans
  return ans
}
