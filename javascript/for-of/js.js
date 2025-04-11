// const subreddits = ['soccer', 'popheads', 'cringe', 'books'];

// for(let i = 0; i < subreddits.length; i++) {
//   console.log(`${subreddits['soccer']}`);
// }

// for(let sub of subreddits) {
//   console.log(sub);
// }

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  vonnie: 60
};

let total = 0;
let scores = Object.values(testScores);
for(let scorce of scores) {
  total += scorce;
  // console.log(total / scores.length);
}

console.log(total / scores.length);

