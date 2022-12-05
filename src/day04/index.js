const { read, send, test } = require('../utils')

const prepareInput = (rawInput) => rawInput
	.split('\n')
	.map(elves => {
		const pairs = elves.split(/[-,]+/).map(Number)
		return [pairs.slice(0, 2), pairs.slice(2)]
	})

const isInclusive = (elves) => {
	const [pair1, pair2] = elves
	return pair1[0] >= pair2[0] && pair1[1] <= pair2[1] ||
		pair1[0] <= pair2[0] && pair1[1] >= pair2[1]
}

const isPartiallyInclusive = (elves) => {
	const [pair1, pair2] = elves
	return pair1[1] - pair2[0] >= 0 && pair2[1] - pair1[0] >= 0
}

const goA = (rawInput) => {
	const input = prepareInput(rawInput)

	const inclusivePairs = input.filter(isInclusive)

	return inclusivePairs.length
}

const goB = (rawInput) => {
	const input = prepareInput(rawInput)

	const inclusivePairs = input.filter(isPartiallyInclusive)

	return inclusivePairs.length
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
