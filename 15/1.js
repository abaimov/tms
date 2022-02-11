const getDateAgo = (date, days) => {
  const first = new Date(date);
  const second = new Date(first - days * 24 * 60 * 60 * 1000);
  return `${second.getMonth() + 1}-${second.getDate()}-${second.getFullYear()}`;
};

console.log(getDateAgo("03-07-2022", 3));
