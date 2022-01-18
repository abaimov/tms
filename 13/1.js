const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function invert(data) {
  let reverseArr = [];
  for (let i = data.length - 1; i > -1; i--) {
    reverseArr.push(data[i]);
  }
  return reverseArr;
}

const res = invert(arr);

console.log(res);
