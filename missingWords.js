let inpStr = "_, Code _.";
let sum = 0;
let inpArr = ["Armenian", "Academy"];
let newStr = "";
for (let i of inpStr) {
  if (i === "_") {
    i = inpArr[sum];
    sum += 1;
  }
  newStr += i;
}
console.log(newStr);
