const multiTable = (n) => {
	const table = []
	for(let i = 1; i <= 10; i++) {
		table.push(`${i} * ${n} = ${i*n}`)
	}
	return table.join('\n')
}