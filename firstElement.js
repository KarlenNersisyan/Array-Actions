let dist = [43, -90, 105, 16, -40, 332];
let num = -71;

let distInfo = [Infinity, 0];
for (let i = 0; i < dist.length; i++) {
  const element = dist[i];
  if (element === num) {
    console.log(element, i);
    break;
  }
  let dist1 = Math.abs(num - element);
  if (dist1 < distInfo[0]) {
    distInfo[1] = i;
    distInfo[0] = dist1;
  }
}

console.log(distInfo);