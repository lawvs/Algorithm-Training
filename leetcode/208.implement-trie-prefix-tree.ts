class Trie {
  root: Record<string, any> = {}

  constructor() {}

  insert(word: string): void {
    let curNode = this.root

    word.split('').forEach((cur) => {
      if (!(cur in curNode)) {
        curNode[cur] = {}
      }
      curNode = curNode[cur]
    })
    curNode.end = true
    // console.log(JSON.stringify(this.root))
  }

  search(word: string): boolean {
    let curNode = this.root
    return (
      word.split('').every((v) => {
        if (!(v in curNode)) {
          return false
        }
        curNode = curNode[v]
        return true
      }) && curNode.end === true
    )
  }

  startsWith(prefix: string): boolean {
    let curNode = this.root
    return prefix.split('').every((v) => {
      if (!(v in curNode)) {
        return false
      }
      curNode = curNode[v]
      return true
    })
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
