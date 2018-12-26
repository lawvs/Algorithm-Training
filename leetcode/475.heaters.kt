class Solution {
    fun findRadius(houses: IntArray, heaters: IntArray): Int {
        if (houses.size <= 0 || heaters.size <= 0) {
            return 0
        }
        houses.sort()
        heaters.sort()
        var dis = 0
        var pos = 0
        for ((index, house) in houses.withIndex()) {
            while (
                pos < heaters.lastIndex &&
                heaters[pos] + heaters[pos + 1] <= house * 2
            ) {
                pos++
            }
            dis = Math.max(dis, Math.abs(heaters[pos] - house))
        }
        return dis
    }
}

fun main(args: Array<String>) {
    var houses: IntArray
    var heaters: IntArray
    var ret: Int
    var ans: Int
    val s = Solution()

    houses = intArrayOf(1,2,3)
    heaters = intArrayOf(2)
    ans = 1
    ret = s.findRadius(houses, heaters)
    println(ret)
    assert(ans == ret)

    houses = intArrayOf(1,2,3,4)
    heaters = intArrayOf(1,4)
    ans = 1
    ret = s.findRadius(houses, heaters)
    println(ret)
    assert(ans == ret)

    houses = intArrayOf(1,5)
    heaters = intArrayOf(2)
    ans = 3
    ret = s.findRadius(houses, heaters)
    println(ret)
    assert(ans == ret)

    houses = intArrayOf(1)
    heaters = intArrayOf(1,2,3,4)
    ans = 0
    ret = s.findRadius(houses, heaters)
    println(ret)
    assert(ans == ret)

    houses = intArrayOf(1,999)
    heaters = intArrayOf(499,500,501)
    ans = 498
    ret = s.findRadius(houses, heaters)
    println(ret)
    assert(ans == ret)

    houses = intArrayOf(1,1,1,1,1,1,999,999,999,999,999)
    heaters = intArrayOf(499,500,501)
    ans = 498
    ret = s.findRadius(houses, heaters)
    println(ret)
    assert(ans == ret)

    println("All test cases passed.")

}
