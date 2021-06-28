let arr = [7, "ACA", "777", 13, 5];
let int = 0;
let str = 0;

for (let i of arr) {
  if (typeof i === "number") {
    int += 1;
  } else if (typeof i === "string") {
    str += 1;
  }
}

console.log(int + " Numbers and " + str + " Strings");
