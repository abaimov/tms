let counter = () => {
  let count = 0;
  return () => {
    return count++;
  };
};

const callFunc = counter();

console.log(callFunc());
console.log(callFunc());
console.log(callFunc());
console.log(callFunc());
console.log(callFunc());
console.log(callFunc());
