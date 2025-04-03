const describeAge = (age) => {const s = (a) => `You're a(n) ${a}`;return age <= 12 ? s('kid') : age<=17 ? s('teenager'):age<=64 ? s('adult') : s('elderly');}
