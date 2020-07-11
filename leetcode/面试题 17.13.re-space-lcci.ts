let cached = {} as { [k: string]: number }

function respace(dictionary: string[], sentence: string, first = true): number {
  if (first) {
    dictionary = Array.from(new Set(dictionary))
    cached = {}
  }

  if (!sentence) {
    return 0
  }
  if (cached[sentence] !== undefined) {
    return cached[sentence]
  }

  const startWords = dictionary.filter((w) => sentence.startsWith(w))
  const ret = Math.min(
    1 + respace(dictionary, sentence.slice(1), false),
    ...startWords.map((w) =>
      respace(dictionary, sentence.slice(w.length), false)
    )
  )
  cached[sentence] = ret
  // console.log(sentence, ret)
  return ret
}
