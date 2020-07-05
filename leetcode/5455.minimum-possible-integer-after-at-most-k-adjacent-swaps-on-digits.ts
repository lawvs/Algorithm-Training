// Brute force
// MLE
function minInteger(num: string, k: number): string | undefined {
  // console.log(num, k)

  if (k <= 0) {
    return num
  }
  if (num.length <= 1) {
    return num
  }

  for (let i = 0; i <= 9; i++) {
    const idx = num.indexOf(String(i))
    if (idx >= 0 && idx <= k) {
      return (
        String(i) + minInteger(num.slice(0, idx) + num.slice(idx + 1), k - idx)
      )
    }
  }
}
