let a = -85;
let b = 80;
let c = 800;

if (a < b && a < c && b < c) {
  console.log(a + "," + b + "," + c);
} else if (b < c && b < a && a < c) {
  console.log(b + "," + a + "," + c);
} else if (c < a && c < b && a < b) {
  console.log(c + "," + a + "," + b);
}else if (b < c && b < a && c < a) {
    console.log(b + "," + c + "," + a);
}else {
  console.log(c + "," + b + "," + a);
}
