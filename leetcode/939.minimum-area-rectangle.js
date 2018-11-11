/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    const MAGIC = Number.MAX_VALUE
    let min = MAGIC
    const set = points.reduce((set, poi) => {
        set.add(poi.toString())
        return set
    }, new Set())

    for (let i = 0; i < points.length; i++) {
        const poi1 = points[i]
        for (let j = i + 1; j < points.length; j++) {
            const poi2 = points[j]
            if (i === j || poi1[0] === poi2[0] || poi1[1] === poi2[1]) continue
            if (
                !set.has([poi1[0], poi2[1]].toString()) ||
                !set.has([poi2[0], poi1[1]].toString())
            )
                continue
            const area =
                (Math.max(poi1[0], poi2[0]) - Math.min(poi1[0], poi2[0])) *
                (Math.max(poi1[1], poi2[1]) - Math.min(poi1[1], poi2[1]))
            if (area > 0 && area < min) {
                min = area
            }
            // console.log(poi1, poi2, area)
        }
    }
    if (min === MAGIC) {
        return 0
    }
    return min
}

let points
points = [[1, 1], [1, 3], [3, 1], [3, 3], [2, 2]]
ret = minAreaRect(points)
console.log(ret)

points = [[1, 1], [1, 3], [3, 1], [3, 3], [4, 1], [4, 3]]
ret = minAreaRect(points)
console.log(ret)
