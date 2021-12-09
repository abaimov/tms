//1

function declarationAvg() {
  let summ = 0;
  let count = arguments.length;
  for (const num of arguments) {
    summ += num;
  }
  return summ / count;
}

console.log(avg(6, 10, 12));

//2

const expressionFuncAvg = function () {
  let summ = 0;
  let count = arguments.length;
  for (const num of arguments) {
    summ += num;
  }
  return summ / count;
};
console.log(expressionFuncAvg(6, 10, 12));

//3

const arrowFuncAvg = (...arg) => {
  let summ = 0;
  let count = arg.length;
  for (const num of arg) {
    summ += num;
  }
  return summ / count;
};

console.log(arrowFuncAvg(6, 10, 12));
