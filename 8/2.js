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

const newArr = files.filter(
  (el) => el.split(".")[el.split(".").length - 1] === "pdf"
);
console.log(" ~ newArr", newArr);
