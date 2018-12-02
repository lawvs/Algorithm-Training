/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    const len = deck.length
    const indices = [...deck.keys()]
    /** @type {number[]} */
    const l = []
    let rev = true
    while (indices.length) {
        if (rev) {
            l.push(indices.shift())
        } else {
            indices.push(indices.shift())
        }
        rev = !rev
    }
    // console.log(l)
    deck = deck.sort((a, b) => a - b)
    const ret = []
    l.forEach((v, i) => (ret[v] = deck[i]))
    return ret
}
