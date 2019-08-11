/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  // ordinalOfDate
  return (
    (new Date(date) - new Date(date.split('-')[0] + '-01-01')) /
      (24 * 60 * 60 * 1000) +
    1
  )
}
