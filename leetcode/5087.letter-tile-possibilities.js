/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  tiles = tiles.split('')
  let set = new Set([tiles.pop()])
  let setT = new Set()
  for (const t of tiles) {
    for (const item of set.keys()) {
      setT.add(item)
      for (let i = 0; i < item.length + 1; i++) {
        const s = item.slice(0, i) + t + item.slice(i)
        setT.add(s)
      }
    }
    setT.add(t)
    set = setT
    setT = new Set()
  }
  // console.log(set)
  return set.size
}
