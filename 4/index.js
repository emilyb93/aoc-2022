const { readFileSync } = require("fs");
const inputArr = readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((input) => {
    const pairArray = input.split(",");
    const firstPair = pairArray[0].split("-");
    const secondPair = pairArray[1].split("-");
    const pairObject = {};
    pairObject.firstStart = +firstPair[0];
    pairObject.firstEnd = +firstPair[1];
    pairObject.secondStart = +secondPair[0];
    pairObject.secondEnd = +secondPair[1];
    return pairObject;
  });

const overlaps = ({ firstStart, firstEnd, secondStart, secondEnd }) => {
  if (firstStart >= secondStart && firstEnd <= secondEnd) return true;

  if (secondStart >= firstStart && secondEnd <= firstEnd) return true;
  return false;
};

const overlappingPairs = inputArr.filter(overlaps);

console.log(overlappingPairs.length);
