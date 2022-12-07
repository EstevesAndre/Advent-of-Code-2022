const { read, send, test } = require('../utils')

const prepareInput = (rawInput) => rawInput

const isMarker = (marker, groupSize = 4) => {
  return new Set(marker).size === groupSize
}

const getMarkerIndex = (input, groupSize = 4) => {
  for(let i = groupSize; i <= input.length;) {
    const marker = input.slice(i - groupSize, i)
    
    if (isMarker(marker, groupSize)) {
      return i
    }
    i++
  }
}

const goA = (rawInput) => {
  const input = prepareInput(rawInput)

  return getMarkerIndex(input, 4)
}

const goB = (rawInput) => {
  const input = prepareInput(rawInput)

  return getMarkerIndex(input, 14)
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
