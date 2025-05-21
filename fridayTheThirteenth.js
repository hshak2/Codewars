const killcount = (counselors, jason) =>
    counselors.filter(val => val[1] < jason).map(val => val[0]);