import { readFile } from "fs";

readFile("../puzzleInput/day1.txt", "utf8", (err, input) => {
  if (err) {
    console.error("Error reading file:", err);
    throw err;
  }

  const partOne = (input: string) => {
    const leftArray: number[] = []
    const rightArray: number[] = []
    let answer: number = 0

    const lines = input.trim().split("\n");

    for (const line of lines) {
      const [left, right] = line.trim().split(/\s+/).map(Number)

      leftArray.push(left)
      rightArray.push(right)
    }

    const sortedLeftArray: number[] = leftArray.sort((a, b) => a - b)
    const sortedRightArray: number[] = rightArray.sort((a, b) => a - b)

    for (let i = 0; i < sortedLeftArray.length; i++){
      const difference: number = Math.abs(sortedLeftArray[i] - sortedRightArray[i])
      
      answer += difference
    }
    return answer
  }
  console.log(partOne(input))
});
