let str = "Hello world";
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];

function invert(data) {
  if (!data || !data.length) {
    return null;
  }

  let result = [];
  let numbOfIter = Math.floor((data.length - 1) / 2);

  for (let i = 0; i <= numbOfIter; i++) {
    if (Array.isArray(data)) {
      result[data.length - 1 - i] = data[i];
      result[i] = data[data.length - 1 - i];
    } else {
      let arr = data.split("");

      result[arr.length - 1 - i] = arr[i];
      result[i] = arr[arr.length - 1 - i];
    }
  }

  if (Array.isArray(data)) {
    return result;
  } else {
    return result.join("");
  }
}

console.log(invert(str));
console.log(invert(arr));
