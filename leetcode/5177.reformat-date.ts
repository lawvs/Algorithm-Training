const m = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
}

function reformatDate(date: string): string {
  const [day, mon, year] = date.split(' ')
  return (
    year +
    '-' +
    m[mon as keyof typeof m] +
    '-' +
    day.slice(0, -2).padStart(2, '0')
  )
}
