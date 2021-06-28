let indexArray = [7, 8, 10].sort((a, b) => a - b);

let max = indexArray[indexArray.length - 1];
let min = indexArray[0];

let result = Array(max - min).fill(undefined);
for (const index of indexArray) {
  result[index - min] = index;
}

console.log(result);