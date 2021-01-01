func canPlaceFlowers(flowerbed []int, n int) bool {
  now := 0
  for i := 0; i < len(flowerbed); i++ {
    if now >= n {
      break
    }
    if flowerbed[i] == 1 {
      i++
      continue
    }
    if i + 1 < len(flowerbed) && flowerbed[i+1] == 1 {
      i += 2
      continue
    }
    now++
    i++
    // fmt.Println(i, flowerbed[i])
  }
  if now >= n {
    return true
  }
  return false
}