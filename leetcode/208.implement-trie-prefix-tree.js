/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.tree = {}
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let t = this.tree
  word.split('').forEach((c, i) => {
    if (!t[c]) {
      t[c] = {}
    }
    t = t[c]
  })
  t.end = true
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let t = this.tree
  return (
    word.split('').every(c => {
      if (!t[c]) {
        return false
      }
      t = t[c]
      return true
    }) && t.end === true
  )
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let t = this.tree
  return prefix.split('').every(c => {
    if (!t[c]) {
      return false
    }
    t = t[c]
    return true
  })
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
