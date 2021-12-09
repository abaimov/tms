const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];
const arr2 = [1, -2, 50, 9, 8, 15, 2];
const arr3 = [1, 2, 3, 5, 19, 76, -67, 78];

let firstSum;
let secondSum;
let thirdSum;

function sum(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
      summ += arr[i];
    }
  }
  return summ;
}

firstSum = sum(arr1);
secondSum = sum(arr2);
thirdSum = sum(arr3);

console.log(firstSum, secondSum, thirdSum);
