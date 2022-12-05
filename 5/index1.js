const { readFileSync } = require("fs");
const input = readFileSync("./input.txt", "utf8")
  .split("\n")
  .map((line) => {
    const splitLine = line.split(" ");
    const move = +splitLine[1];
    const from = +splitLine[3];
    const to = +splitLine[5];
    return { move, from, to };
  });
const crates = [
  ["B", "S", "V", "Z", "G", "P", "W"],
  ["J", "V", "B", "C", "Z", "F"],
  ["V", "L", "M", "H", "N", "Z", "D", "C"],
  ["L", "D", "M", "Z", "P", "F", "J", "B"],
  ["V", "F", "C", "G", "J", "B", "Q", "H"],
  ["G", "F", "Q", "T", "S", "L", "B"],
  ["L", "G", "C", "Z", "V"],
  ["N", "L", "G"],
  ["J", "F", "H", "C"],
];

function moveCrates({ move, from, to }) {
  const cratesToMove = crates[from - 1].splice(-move).reverse();
  crates[to - 1].push(...cratesToMove);
}

input.forEach(moveCrates);

crates.forEach((line) => {
  console.log(line[line.length - 1]);
});
