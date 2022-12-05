const { read, send, test } = require('../utils')

const boardIndexCalc = (i = 0) => i * 4 + 1

const prepareInput = (rawInput) => {
	const [verticalBoard, movesAux] = rawInput
		.split('\n\n')
		.map(k => k.split('\n'))

	const board = Array.from({ length: 9 }, () => [])

	verticalBoard.reverse().slice(1).map((row) => {
		for (let i = 0; i < 9; i++) {
			const crate = row[boardIndexCalc(i)]
			if (crate !== ' ') board[i].push(crate)
		}
	})

	const moves = movesAux.map(move => {
		const match = move.match(/^move ([0-9]*) from ([0-9]*) to ([0-9]*)$/)
		return {
			count: match[1],
			from: match[2] - 1,
			to: match[3] - 1,
		}
	})

	return {
		board,
		moves
	}
}

const playGame = (board, moves, shouldReverse = true) => {
	moves.forEach(({ count, from, to }) => {
		const index = board[from].length - count
		const partToMove = board[from].slice(index)
		board[to].push(...(shouldReverse ? partToMove.reverse() : partToMove))
		board[from] = board[from].slice(0, index)
	})

	return board
}

const goA = (rawInput) => {
	const { board, moves } = prepareInput(rawInput)

	const playedBoard = playGame(board, moves)

	return playedBoard.map(row => row[row.length - 1]).join('')
}

const goB = (rawInput) => {
	const { board, moves } = prepareInput(rawInput)

	const playedBoard = playGame(board, moves, false)

	return playedBoard.map(row => row[row.length - 1]).join('')
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
