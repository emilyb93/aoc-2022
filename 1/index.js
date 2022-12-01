const { readFileSync } = require("fs");

const fileContents = readFileSync("./input.txt", "utf8");

const splitFile = fileContents.split("\n\n");

const cals = splitFile.map((calString) => {
  const cals = calString.split("\n");
  let count = 0;
  cals.forEach((cal) => {
    count += +cal;
  });
  return count;
});
cals.sort((a, b) => b - a);
// console.log(cals);

console.log(cals[0] + cals[1] + cals[2]);
