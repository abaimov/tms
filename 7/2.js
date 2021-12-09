const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];
const arr2 = [1, -2, 50, 9, -8, 15, 2];
const arr3 = [1, 2, 3, 5, 19, -76, -67, 78];

function getNewArrFromGroup() {
  let newArrFromGroup = [];
  for (const arr of arguments) {
    for (const num of arr) {
      num < 0 && num % 2 === 0 && newArrFromGroup.push(num);
    }
  }
  newArrFromGroup.pop();
  newArrFromGroup.shift();
  return newArrFromGroup;
}

// console.log(getNewArrFromGroup(arr1, arr2, arr3));
