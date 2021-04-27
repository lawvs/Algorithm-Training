package main

import (
	"math"
)

func judgeSquareSum(c int) bool {
	// epsilon := math.Nextafter(1, 2) - 1
	to := int(math.Sqrt(float64(c)))
	for i := 0; i <= to; i++ {
		a2 := i * i
		b := int(math.Sqrt(float64(c - a2)))
		if b*b+a2 == c {
			// fmt.Println(i, b)
			return true
		}
	}
	return false
}
