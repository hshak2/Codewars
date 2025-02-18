function sortList (sortBy, list) {
    let z = list.sort((a, b) => b[sortBy] - a[sortBy])
    return z
 
 }