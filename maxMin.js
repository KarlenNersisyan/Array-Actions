let arr = ["Armenian", "Code", "programmer", "2021", "april"];
let sum = 0;
let maxLength = arr[0].length;
let minLength = arr[0].length;

for (let i of arr) {
  if (maxLength < i.length) {
    maxLength = i.length;
  }
  if (minLength > i.length) {
    minLength = i.length;
  }
}

sum = maxLength + minLength;

console.log(sum);
