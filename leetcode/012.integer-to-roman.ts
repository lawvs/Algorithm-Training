const group = [
  { number: 1, symbol: 'I' },
  { number: 4, symbol: 'IV' },
  { number: 5, symbol: 'V' },
  { number: 9, symbol: 'IX' },
  { number: 10, symbol: 'X' },
  { number: 40, symbol: 'XL' },
  { number: 50, symbol: 'L' },
  { number: 90, symbol: 'XC' },
  { number: 100, symbol: 'C' },
  { number: 400, symbol: 'CD' },
  { number: 500, symbol: 'D' },
  { number: 900, symbol: 'CM' },
  { number: 1000, symbol: 'M' },
]

function intToRoman(num: number): string {
  return group
    .sort((a, b) => b.number - a.number)
    .reduce((acc, { number, symbol }) => {
      const n = Math.floor(num / number)
      acc.push(Array(n).fill(symbol).join(''))
      num -= number * n
      return acc
    }, [] as string[])
    .join('')
}
