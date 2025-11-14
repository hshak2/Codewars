function backToTheFuture(str) {
  const matching = {
    January: ['October',31],
    April: ['July',30],
    September: ['December',31],
    February: ['March',31],
    March: ['November',30]
  }
  const [dayWeek, dayMonth, month] = str.split` `;
  
  return matching[month] && matching[month][1] >= dayMonth
    ? `I'm leaving here on ${dayWeek} ${dayMonth} ${matching[month][0]}!`
    : `Doc, I can't get back to the future!`;
}