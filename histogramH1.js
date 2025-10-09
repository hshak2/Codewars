function histogram(results) {
    let str = ""

    for (let i = results.length - 1; i >= 0; i--) {
        str += (i + 1) + "|"+ "#".repeat(results[i]) + (results[i] > 0 ? " " + results[i] : "") + "\n"
    }

    return str
}