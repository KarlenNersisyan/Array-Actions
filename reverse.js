let num = 125;

let numbers = num.toString();
let length = numbers.length;
let firstDigit = numbers[0];
let lastDigit = numbers[length - 1];

if (length === 1) {
  console.log(num);
} else {
  console.log(lastDigit + numbers.slice(1, length - 1) + firstDigit);
}
