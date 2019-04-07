/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
  const canMatch = letter => {
    let index = 0
    for (let i = 0; i < letter.length; i++) {
      if (index < pattern.length && letter[i] === pattern[index]) {
        index++
        continue
      }
      if (letter[i] === letter[i].toUpperCase()) {
        return false
      }
    }
    if (index === pattern.length) {
      return true
    }
    return false
  }

  return queries.map(canMatch)
}
