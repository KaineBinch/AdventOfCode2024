import { readFile } from "fs";

readFile("../puzzleInput/day1.txt", "utf8", (err, input) => {
  if (err) {
    console.error("Error reading file:", err);
    throw err;
  }

  const parseInput = (input: string) => {
    const leftArray: number[] = []
    const rightArray: number[] = []

    const lines = input.trim().split("\n");

    for (const line of lines) {
      const [left, right] = line.trim().split(/\s+/).map(Number)

      leftArray.push(left)
      rightArray.push(right)
    }

    const sortedLeftArray: number[] = leftArray.sort((a, b) => a - b)
    const sortedRightArray: number[] = rightArray.sort((a, b) => a - b)

     return { sortedLeftArray, sortedRightArray }
  }

  const partOne = (sortedLeftArray: number[], sortedRightArray: number[]) => {
    let answer: number = 0
    for (let i = 0; i < sortedLeftArray.length; i++){
      const difference: number = Math.abs(sortedLeftArray[i] - sortedRightArray[i])
      
      answer += difference
    }
    return answer
  }

  const partTwo = (sortedLeftArray: number[], sortedRightArray: number[]) => {
    let answer: number = 0 

    for (const num of sortedLeftArray) {
      let simScore: number = 0
      for (let i = 0; i < sortedRightArray.length; i++){
        if (num === sortedRightArray[i]) {
          simScore++;
        }
        if (num < sortedRightArray[i]) {
          break;
        }
      }
      answer += (num * simScore)
  }
  return answer
  }

  const { sortedLeftArray, sortedRightArray } = parseInput(input)
  
  console.log("Part One Answer:", partOne(sortedLeftArray, sortedRightArray), "Part Two Answer:", partTwo(sortedLeftArray, sortedRightArray))
});
