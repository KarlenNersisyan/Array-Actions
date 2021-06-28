let number = 7;
let num1 = 0,
  num2 = 1,
  nextNumber;

for (let i = 1; i <= number; i++) {
  console.log(num1);
  nextNumber = num1 + num2;
  num1 = num2;
  num2 = nextNumber;
}