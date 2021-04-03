/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence1 === ' ' || sentence2 === ' ') {
    return true
  }
  if (sentence1.length === sentence2.length) {
    return sentence1 === sentence2
  }
  if (sentence1.length < sentence2.length) {
    // swap
    const tmp = sentence1
    sentence1 = sentence2
    sentence2 = tmp
  }
  if (
    sentence1.startsWith(sentence2 + ' ') ||
    sentence1.endsWith(' ' + sentence2)
  ) {
    return true
  }

  const arr1 = sentence1.split(' ')
  const arr2 = sentence2.split(' ')

  while (arr1.length && arr2.length) {
    if (arr1[0] === arr2[0]) {
      arr1.shift()
      arr2.shift()
    } else {
      return arr1.join(' ').endsWith(' ' + arr2.join(' '))
    }
  }
  throw new Error('Unreachable')
}
