const arr = [-14, 0, 10];

let countOfMinus = 0;

let isZero = false;
for (let i = 0; i < arr.length; i += 1) {
  const item = arr[i];
  if (item === 0) {
    isZero = true;
  }

  if (item < 0) {
    countOfMinus += 1;
  }
}
if (isZero) {
  console.log("unsigned");
} else if (countOfMinus % 2 === 0) {
  console.log("+");
} else {
  console.log("-");
}
