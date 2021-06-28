function primeNum(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return("NO");
    }
  }
  return("YES");
}
console.log(primeNum(2));
