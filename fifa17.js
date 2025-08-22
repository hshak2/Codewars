function fifa(ticket, results){
  let sum = "";
  if (results[0][0] > results[0][2]) sum += ticket.Home;
  if (results[1][2] > results[1][0]) sum += ticket.Away;
  if (results[2][0] === results[2][2]) sum += ticket.Draw;
  return `£${sum.split("£").filter(el => el !== "").map(element => parseInt(element)).reduce((acc, value) => value + acc, 0)}`;

}