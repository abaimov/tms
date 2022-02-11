const cleanRoom = (dirtyLevel) => {
  return new Promise((resolve) => {
    const ms = dirtyLevel * 1000;
    setTimeout(() => resolve(dirtyLevel), ms);
  });
};

cleanRoom(3).then((result) => {
  console.log(`Уборка проведена успешно за ${result} секунд`);
});
