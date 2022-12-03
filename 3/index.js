const { readFileSync } = require("fs");
const internal = require("stream");

const input = readFileSync("./input.txt", "utf8").split("\n");
//   .map((line) => {
//     const halfPoint = line.length / 2;
//     const firstHalf = line.slice(0, halfPoint);
//     const secondHalf = line.slice(halfPoint);
//     return [firstHalf, secondHalf];
//   });

// console.log("Z".charCodeAt()); //97-122 a-z 65-90 A-Z

function countSinglePriorities(count, [line1, line2]) {
  //   console.log({ line1, line2 });
  const ruckSack1 = line1.split("");
  for (let i = 0; i < ruckSack1.length; i++) {
    const letter = ruckSack1[i];
    if (line2.includes(letter)) {
      const charCode = letter.charCodeAt();
      const priority = charCode < 91 ? charCode - 64 + 26 : charCode - 96;
      //   console.log(priority);
      count += priority;
      //   console.log({ letter, priority });
      break;
    }
  }
  return count;
}

// const singlePriorityScore = input.reduce(countSinglePriorities, 0);

let groupedScore = 0;

for (let i = 0; i < input.length; i += 3) {
  const line1 = input[i];
  const line2 = input[i + 1];
  const line3 = input[i + 2];
  console.log({ line1, line2, line3 });

  for (let j = 0; j < line1.length; j++) {
    const letter = line1[j];
    if (line2.includes(letter) && line3.includes(letter)) {
      const charCode = letter.charCodeAt();
      const priority = charCode < 91 ? charCode - 64 + 26 : charCode - 96;
      //   console.log(priority);
      groupedScore += priority;
      console.log(groupedScore);
      break;
    }
  }
}
