import run from "aocrunner"

const parseInput = (rawInput: string) => {
  const leftArray: number[] = []
  const rightArray: number[] = []

  const lines = rawInput.trim().split("\n")

  for (const line of lines) {
    const [left, right] = line.trim().split(/\s+/).map(Number)

    leftArray.push(left)
    rightArray.push(right)
  }

  const sortedLeftArray: number[] = leftArray.sort((a, b) => a - b)
  const sortedRightArray: number[] = rightArray.sort((a, b) => a - b)

  return { sortedLeftArray, sortedRightArray }
}

const part1 = (rawInput: string) => {
  const { sortedLeftArray, sortedRightArray } = parseInput(rawInput)
  let answer: number = 0
  for (let i = 0; i < sortedLeftArray.length; i++) {
    const difference: number = Math.abs(
      sortedLeftArray[i] - sortedRightArray[i],
    )

    answer += difference
  }
  return answer
}

const part2 = (rawInput: string) => {
  const { sortedLeftArray, sortedRightArray } = parseInput(rawInput)
  let answer: number = 0

  for (const num of sortedLeftArray) {
    let simScore: number = 0
    for (let i = 0; i < sortedRightArray.length; i++) {
      if (num === sortedRightArray[i]) {
        simScore++
      }
      if (num < sortedRightArray[i]) {
        break
      }
    }
    answer += num * simScore
  }
  return answer
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
