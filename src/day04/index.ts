import run from "aocrunner"

const parseInput = (rawInput: string): string[][] => {
  return rawInput
    .split("\n")
    .filter(Boolean)
    .map((line) => line.split(""))
}

const directions = [
  [0, -1], // Up
  [0, 1], // Down
  [-1, 0], // Left
  [1, 0], // Right
  [-1, -1], // Top Left
  [1, 1], // Bottom Right
  [1, -1], // Top Right
  [-1, 1], // Bottom Left
]
const diagdirections = directions.slice(-4)

const part1 = (rawInput: string): number => {
  const input = parseInput(rawInput)

  const search = (grid: string[][], x: number, y: number): number => {
    let count = 0

    for (const [dx, dy] of directions) {
      const sequence = []

      for (let i = 0; i < 4; i++) {
        const newY = y + dy * i
        const newX = x + dx * i

        if (
          newY < 0 ||
          newY >= grid.length ||
          newX < 0 ||
          newX >= grid[0].length
        ) {
          break
        }

        sequence.push(grid[newY][newX])
      }

      if (sequence.join("") === "XMAS") {
        count++
      }
    }

    return count
  }
  let count = 0

  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[0].length; x++) {
      count += search(input, x, y)
    }
  }

  return count
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let count = 0
  let foundM = false
  let foundS = false

  for (let a = 0; a < input.length; a++) {
    for (let b = 0; b < input[a].length; b++) {
      if (input[a][b].toUpperCase() === "A") {
        let diagArray = []
        for (const [dx, dy] of diagdirections) {
          const newRow = a + dx
          const newCol = b + dy

          if (
            newCol < 0 ||
            newCol >= input.length ||
            newRow < 0 ||
            newRow >= input[0].length
          ) {
            break
          }

          if (input[newRow][newCol].toUpperCase() === "M") {
            foundM = true
            diagArray.push("M")
          }
          if (input[newRow][newCol].toUpperCase() === "S") {
            foundS = true
            diagArray.push("S")
          }
          if (!foundM && !foundS) break

          if (diagArray.length === 4) {
            if (diagArray[0] === diagArray[1] || diagArray[2] === diagArray[3])
              break
            count++
          }
        }
      }
    }
  }
  return count
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
