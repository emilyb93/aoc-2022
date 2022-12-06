const { readFileSync } = require("fs");
const input = readFileSync("./input.txt", "utf8");

for (let i = 3; i < input.length; i++) {
  const currentSlice = input.slice(i - 3, i + 1);
  const uniqueSlice = Array.from(new Set(currentSlice.split("")));
  console.log(currentSlice);
  if (uniqueSlice.length === 4) {
    console.log(i + 1);
    break;
  }
}
