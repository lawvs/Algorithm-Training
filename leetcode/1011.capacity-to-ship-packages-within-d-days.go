package main

func canShip(weights []int, D int, capacity int) bool {
	days := 1
	curCapacity := 0
	for _, weight := range weights {
		if weight+curCapacity <= capacity {
			curCapacity += weight
			continue
		}
		if weight > capacity {
			return false
		}
		days++
		curCapacity = weight
		if days > D {
			return false
		}
	}
	return true
}

func shipWithinDays(weights []int, D int) int {
	sum := 0
	for _, weight := range weights {
		sum += weight
	}
	left := 0
	right := sum
	for left < right {
		mid := (left + right) / 2
		can := canShip(weights, D, mid)
		// fmt.Println(mid, can)
		if can {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return right
}
