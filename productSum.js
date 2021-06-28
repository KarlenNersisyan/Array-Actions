let number = 66;

if (number === 0) {
  console.log("Cannot calculate");
} else {
  let sum = 0,
    product = 1,
    result;
  let numArray = number.toString().split("");
  for (const item of numArray) {
    sum += +item;
    product *= +item;
  }

  if (product % sum === 0) {
    console.log(`Quotient is ${product / sum}`);
  } else {
    console.log(`Remainder is ${product % sum}`);
  }
}
