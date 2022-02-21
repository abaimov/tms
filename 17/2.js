const cleanRoom = (dirtyLevel) => {
  return new Promise((resolve) => {
    if (dirtyLevel < 0 || dirtyLevel > 10) {
      resolve(
        "Неверно указан уровень загрязнения. Уборка проводиться не будет"
      );
      return;
    }

    setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
  });
};

const cleanRoomsAll = (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) => {
  Promise.all([
    cleanRoom(dirtyLevel_1),
    cleanRoom(dirtyLevel_2),
    cleanRoom(dirtyLevel_3),
  ]).then((result) => {
    if (isNaN(result)) {
      console.log(result);
    } else {
      console.log(`Уборка проведена успешно за ${result} секунд`);
    }
  });
};

cleanRoomsAll(1, -9, 2);
