let array = [8, 0, 1, "hey", 12, 5, true, "2", null, NaN, 7, 3];

let filterArray = array.filter((e) => typeof e === "number" && !isNaN(e));
let res = [];
for (const item of filterArray) {
  if (item % 2 === 0) {
    res.push(item);
  } else {
    res.unshift(item);
  }
}

console.log(res);
