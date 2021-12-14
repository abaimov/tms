const files = [
  "text.docx",
  "index.html",
  "document.pdf",
  "script.js",
  "style.css",
  "summary.pdf",
  "Harry_Potter.pdf",
  "report.pdf",
];

let newArr = [];
files.filter(
  (el) => el.split(".")[1] === "pdf" && newArr.push(el.split(".")[0])
);
console.log("newArr :>> ", newArr);
