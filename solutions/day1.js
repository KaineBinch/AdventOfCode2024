"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
(0, fs_1.readFile)("../puzzleInput/day1.txt", "utf8", function (err, input) {
    if (err) {
        console.error("Error reading file:", err);
        throw err;
    }
    var partOne = function (input) {
        var leftArray = [];
        var rightArray = [];
        var answer = 0;
        var lines = input.trim().split("\n");
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            var _a = line.trim().split(/\s+/).map(Number), left = _a[0], right = _a[1];
            leftArray.push(left);
            rightArray.push(right);
        }
        var sortedLeftArray = leftArray.sort(function (a, b) { return a - b; });
        var sortedRightArray = rightArray.sort(function (a, b) { return a - b; });
        for (var i = 0; i < sortedLeftArray.length; i++) {
            var difference = Math.abs(sortedLeftArray[i] - sortedRightArray[i]);
            answer += difference;
        }
        return answer;
    };
    console.log(partOne(input));
});
