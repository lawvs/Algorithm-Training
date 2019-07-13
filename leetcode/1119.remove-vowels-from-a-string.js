/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
  return S.split('')
    .filter(c => !['a', 'e', 'i', 'o', 'u'].includes(c))
    .join('')
}
