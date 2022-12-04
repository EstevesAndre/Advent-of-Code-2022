const { read, send, test } = require('../utils')

const prepareInput = (rawInput) => rawInput
	.split('\n')


const goA = (rawInput) => {
	const input = prepareInput(rawInput)

	const scores = {
		'A X': 3 + 1,
		'A Y': 6 + 2,
		'A Z': 0 + 3,
		'B X': 0 + 1,
		'B Y': 3 + 2,
		'B Z': 6 + 3,
		'C X': 6 + 1,
		'C Y': 0 + 2,
		'C Z': 3 + 3,
	}

	return input.map(v => scores[v]).reduce((a, b) => a + b)
}

const goB = (rawInput) => {
	const input = prepareInput(rawInput)

	const getCorrectRound = (round) => {
		let correctValue = ''
		const a = round[0], b = round[2]

		switch (b) {
			case 'X':
				correctValue = a === 'A' ? 'C' : a === 'B' ? 'A' : 'B'
				break
			case 'Y':
				correctValue = a
				break
			case 'Z':
				correctValue = a === 'A' ? 'B' : a === 'B' ? 'C' : 'A'
				break

		}

		return `${round[0]} ${correctValue}`
	}

	const scores = {
		'A A': 3 + 1,
		'A B': 6 + 2,
		'A C': 0 + 3,
		'B A': 0 + 1,
		'B B': 3 + 2,
		'B C': 6 + 3,
		'C A': 6 + 1,
		'C B': 0 + 2,
		'C C': 3 + 3,
	}

	return input
		.map(getCorrectRound)
		.map(v => scores[v])
		.reduce((a, b) => a + b)
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
