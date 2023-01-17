const arrTestA = [5, 1, 5];
const arrTestB = [5, 3, 2];

function compareTriplets(a, b) {
  let pointA = 0;
  let pointB = 0;
  for (let i = 0; i < arrTestA.length; i++) {
    if (a[i] > b[i]) pointA += 1;
    if (a[i] == b[i]) null;
    if (a[i] < b[i]) pointB += 1;
  }
  console.log([pointA, pointB]);
}

compareTriplets(arrTestA, arrTestB);
