import run from "aocrunner"

const parseInput = (rawInput: string) => {
  const lines = rawInput.trim().split("\n")
  const lineArrays = lines.map((line) => line.split(" ").map(Number))
  return lineArrays
}

function isSafe(levels: number[]): boolean {
  const differences: number[] = []

  for (let i = 1; i < levels.length; i++) {
    differences.push(levels[i] - levels[i - 1])
  }

  const increasing = differences.every((d) => d >= 1 && d <= 3)
  const decreasing = differences.every((d) => d <= -1 && d >= -3)

  return increasing || decreasing
}

const part1 = (rawInput: string) => {
  const lineArrays = parseInput(rawInput)
  let safeCount = 0

  for (const num of lineArrays) {
    let wrongCount = 0
    let isIncreasing = true
    let isDecreasing = true

    for (let i = 1; i < num.length; i++) {
      let prevNumber = num[i - 1]
      const diff = Math.abs(num[i] - prevNumber)

      if (diff < 1 || diff > 3) {
        wrongCount++
      }
      if (prevNumber < num[i]) {
        isIncreasing = false
      } else if (prevNumber > num[i]) {
        isDecreasing = false
      }
    }
    if (!isDecreasing && !isIncreasing) {
      wrongCount++
    }
    if (wrongCount == 0) {
      safeCount++
    }
  }
  return safeCount
}

const part2 = (rawInput: string) => {
  const lineArrays = parseInput(rawInput)

  let safe = 0
  let madeSafe = 0

  for (const line of lineArrays) {
    let tolerable = false

    if (isSafe(line)) {
      safe++
    }

    for (let i = 0; i < line.length; i++) {
      const removed = [...line.slice(0, i), ...line.slice(i + 1)]

      if (isSafe(removed)) {
        tolerable = true
        break
      }
    }

    if (tolerable || isSafe(line)) {
      madeSafe++
    }
  }

  return madeSafe
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
