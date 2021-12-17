const arrUnique = arr.reduce((newArr, el, i, oldArr) => {
  if (oldArr.indexOf(el) === i && newArr.indexOf(el) < 0) {
    newArr.push(el);
  }
  return newArr;
}, []);
console.log(arrUnique);
