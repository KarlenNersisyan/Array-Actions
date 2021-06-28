let num = 7654;
let digit = 6;

let sum = false;
while (num) {
  let lastDigit = num % 10;
  if (lastDigit === digit) {
    sum = true;
    break;
  }
  num = (num - lastDigit) / 10;
}

console.log(sum);