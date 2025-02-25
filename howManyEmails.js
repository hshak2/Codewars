function getPercentage(sent, limit){
    limit = limit || 1000;
    if(sent == 0) {
      return "No e-mails sent";
    } else if (sent>=limit) {
      return "Daily limit is reached";
    } else {
      return Math.floor(sent/limit*100) + '%'
    }
  }