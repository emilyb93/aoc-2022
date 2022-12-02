const { readFileSync } = require("fs");

const input = readFileSync("./input.txt", "utf8");

// Rock     = A + X - 1
// Paper    = B + Y - 2
// Scissors = C + Z - 3

//6 for win
//3 for draw
//0 for loss

// const shapeScore = {
//   X: 1,
//   Y: 2,
//   Z: 3,
// };

// const oppositeOf = {
//   X: "A",
//   Y: "B",
//   Z: "C",
// };

// const wins = ["A Y", "B Z", "C X"];

// let score = 0;
// input.split("\n").forEach((line) => {
//   const oppShape = line[0];
//   const myShape = line[2];

//   score += shapeScore[myShape];

//   if (wins.includes(line)) {
//     score += 6;
//   }

//   if (oppShape === oppositeOf[myShape]) {
//     score += 3;
//   }
// });

// X = LOSE
// Y = DRAW
// Z = WIN

// a rock
// b paper
// c scissor
const shape = {
  A: { beats: "C", losesTo: "B" },
  B: { beats: "A", losesTo: "C" },
  C: { beats: "B", losesTo: "A" },
};

const shapeScore = {
  A: 1,
  B: 2,
  C: 3,
};

let score = 0;
input.split("\n").forEach((line) => {
  const oppShape = line[0];
  const outcome = line[2];

  if (outcome === "X") {
    //we need to lose
    const shapeToPlay = shape[oppShape].beats;

    score += shapeScore[shapeToPlay];
  }

  if (outcome === "Y") {
    //draw
    score += shapeScore[oppShape] + 3;
  }

  if (outcome === "Z") {
    const shapeToPlay = shape[oppShape].losesTo;
    score += shapeScore[shapeToPlay] + 6;
  }
});

console.log(score);
