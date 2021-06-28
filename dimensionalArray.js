let arr = [
  [4, 5, 5],
  [5, 0, 3],
  [5, 6, 4],
  [6, 1, -5],
];
let sumArr = [];
let sum = 0;

for (let i of arr) {
  for (let j of i) {
    sum += j;
  }
  sumArr.push(sum);
  sum = 0;
}

console.log(sumArr);
