import run from "aocrunner"
import { match } from "assert"

const parseInput = (rawInput: string) => rawInput

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const matches = input.match(/mul\(\d+,\d+\)/g)
  const nums = matches.map((match) => match.match(/\d+/g))
  const multiples = nums.map((num) => Number(num[0]) * Number(num[1]))
  const answer = multiples.reduce((total, i) => total + i, 0)
  return answer
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const regex = /do\(\)|don't\(\)|mul\(\d+,\d+\)/g
  let isValid = true
  const validMulMatches: [number, number][] = []

  const matches = input.match(regex)
  if (matches) {
    matches.forEach((match) => {
      if (match === "do()") {
        isValid = true
      } else if (match === "don't()") {
        isValid = false
      } else if (isValid && match.startsWith("mul(")) {
        const [x, y] = match.match(/\d+/g)!.map(Number)
        validMulMatches.push([x, y])
      }
    })
  }
  const answer = validMulMatches.reduce((total, [x, y]) => total + x * y, 0)
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
