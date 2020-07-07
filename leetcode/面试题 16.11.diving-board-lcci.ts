function divingBoard(shorter: number, longer: number, k: number): number[] {
  if (!k) {
    return []
  }
  if (shorter === longer) {
    return [shorter * k]
  }

  let acc = shorter * k
  const arr = [acc]
  for (let i = 0; i < k; i++) {
    acc = acc - shorter + longer
    arr.push(acc)
  }
  return arr
}
