/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if (name.length === 0 && typed.length === 0) {
        return true
    }
    if (name.length === 0 || typed.length === 0) {
        return false
    }
    if (name[0] !== typed[0]) {
        return false
    }

    let pos1 = 1
    let pos2 = 1
    while (pos1 < name.length) {
        if (name[pos1] === typed[pos2]) {
            pos1++
            pos2++
            continue
        }
        if (typed[pos2] === name[pos1 - 1]) {
            pos2++
            continue
        }
        return false
    }
    while (pos2 < typed.length) {
        if (typed[pos2] !== name.slice(-1)[0]) {
            return false
        }
        pos2++
    }
    return true
}
