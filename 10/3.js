let arr = [1, "str", 24, { name: "Ivan" }, 89, undefined, "10"];
let [firstElement, secondElement, , , fifthElement, ...otherElements] = arr;

console.log(fifthElement);
console.log(otherElements);
