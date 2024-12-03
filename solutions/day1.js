"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
(0, fs_1.readFile)("../puzzleInput/day1.txt", "utf8", function (err, input) {
    if (err) {
        console.error("Error reading file:", err);
        throw err;
    }
    var parseInput = function (input) {
        var leftArray = [];
        var rightArray = [];
        var lines = input.trim().split("\n");
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            var _a = line.trim().split(/\s+/).map(Number), left = _a[0], right = _a[1];
            leftArray.push(left);
            rightArray.push(right);
        }
        var sortedLeftArray = leftArray.sort(function (a, b) { return a - b; });
        var sortedRightArray = rightArray.sort(function (a, b) { return a - b; });
        return { sortedLeftArray: sortedLeftArray, sortedRightArray: sortedRightArray };
    };
    var partOne = function (sortedLeftArray, sortedRightArray) {
        var answer = 0;
        for (var i = 0; i < sortedLeftArray.length; i++) {
            var difference = Math.abs(sortedLeftArray[i] - sortedRightArray[i]);
            answer += difference;
        }
        return answer;
    };
    var partTwo = function (sortedLeftArray, sortedRightArray) {
        var answer = 0;
        for (var _i = 0, sortedLeftArray_1 = sortedLeftArray; _i < sortedLeftArray_1.length; _i++) {
            var num = sortedLeftArray_1[_i];
            var simScore = 0;
            for (var i = 0; i < sortedRightArray.length; i++) {
                if (num === sortedRightArray[i]) {
                    simScore++;
                }
                if (num < sortedRightArray[i]) {
                    break;
                }
            }
            answer += (num * simScore);
        }
        return answer;
    };
    var _a = parseInput(input), sortedLeftArray = _a.sortedLeftArray, sortedRightArray = _a.sortedRightArray;
    console.log("Part One Answer:", partOne(sortedLeftArray, sortedRightArray), "Part Two Answer:", partTwo(sortedLeftArray, sortedRightArray));
});
