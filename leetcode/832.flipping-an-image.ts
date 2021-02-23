function flipAndInvertImage(A: number[][]): number[][] {
  return A.map((i) => i.reverse().map((j) => j ^ 1))
}
