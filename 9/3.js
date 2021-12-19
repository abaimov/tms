const fibonachi = (n) => {
  return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
};

console.log("fibonachi :>> ", fibonachi(8));
