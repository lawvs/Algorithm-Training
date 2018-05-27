/*
 * leetcode #841 keys-and-rooms 钥匙和房间
 * https://leetcode-cn.com/contest/weekly-contest-86/problems/keys-and-rooms/
 */

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const arr = new Array()
    arr[0] = 1 // ready
    arr.length = rooms.length

    let change = true
    while(change) {
        change = false
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === 1) { // ready
                for (let j = rooms[i].length - 1; j >= 0; j--) {
                    const key = rooms[i][j]
                    if (arr[key] === undefined) {
                        arr[key] = 1 //ready
                        change = true
                    }
                }
                arr[i] = true
            }
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === undefined) {
            return false
        }
    }
    // console.log(arr)
    return true
};

// rooms = [[1],[2],[],[3]]
// res = canVisitAllRooms(rooms)
// console.log(res)
