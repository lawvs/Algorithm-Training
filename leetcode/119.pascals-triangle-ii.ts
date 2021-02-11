function getRow(rowIndex: number): number[] {
  const array = [1]
  for (let i = 1; i <= rowIndex; i++) {
    array[i] = 1
    let pre = 1
    for (let j = 1; j < i; j++) {
      const newN = array[j] + pre
      pre = array[j]
      array[j] = newN
    }
    // console.log(array)
  }
  return array
}
