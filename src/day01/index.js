const { read, send, test } = require('../utils')

const prepareInput = (rawInput) => rawInput
	.split('\n\n')
	.map(elf => elf.split('\n').map(Number))


const sumList = (list) => list.reduce((a, b) => a + b)

const goA = (rawInput) => {
	const input = prepareInput(rawInput)

	return Math.max(...input.map(sumList))
}

const goB = (rawInput) => {
	const input = prepareInput(rawInput)

	const elves = input.map(sumList)

	elves.sort().reverse()

	return sumList(elves.slice(1, 4))
}

/* Tests */

// test(goA(`rawInput`), expected)
// test(goB(`rawInput`), expected)

/* Results */
const input = read()

console.time('Time')
const resultA = goA(input)
console.timeEnd('Time')
console.log('Solution to part 1:', resultA)

console.time('Time')
const resultB = goB(input)
console.timeEnd('Time')
console.log('Solution to part 2:', resultB)
