let a = 3;

if (a % 21 == 0 && a % 5 != 0) {
  console.log(a + " is a multiple of 3 and 7.");
} else if (a % 35 == 0 && a % 3 != 0) {
  console.log(a + " is a multiple of 5 and 7.");
} else if (a % 35 == 0 && a % 3 == 0) {
  console.log(a + " is a multiple of 3, 5 and 7.");
} else if (a % 3 == 0) {
  console.log(a + " is a multiple of 3");
} else {
  console.log(a + " is not a multiple of 3, 5 or 7.");
}
