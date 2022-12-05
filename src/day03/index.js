const { read, send, test } = require('../utils')

const a = 'a'.charCodeAt(0)
const A = 'A'.charCodeAt(0)

const prepareInput = (rawInput, divisions = 2) => rawInput
	.split('\n')
	.map(rucksack => {
		const size = rucksack.length / divisions

		const result = []
		for (let i = 0; i < divisions; i++) {
			result.push(rucksack.slice(i * size, (i + 1) * size))
		}

		return result
	})


const getCommonChar = (rucksack) => {
	const [first, ...rest] = rucksack

	for (const char of first.split('')) {
		const exists = rest.every(elem => elem.includes(char))

		if (exists) {
			return char
		}
	}
}

const calcScore = (input) => {
	let score = 0

	input.forEach(rucksack => {
		const char = getCommonChar(rucksack)
		const code = char.charCodeAt(0)
		const value = code + (code >= a ? 1 - a : 27 - A)
		score += value
	})

	return score
}

const goA = (rawInput) => {
	const input = prepareInput(rawInput)

	return calcScore(input)
}

const goB = (rawInput) => {
	const input = rawInput.split('\n')

	const inputParsed = []

	for (let i = 0; i < input.length; i += 3) {
		inputParsed.push(input.slice(i, i + 3))
	}

	return calcScore(inputParsed)
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
