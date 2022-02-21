const cleanRoom = (dirtyLevel) => {
  return new Promise(function (resolve, reject) {
    if (dirtyLevel < 0 || dirtyLevel > 10) {
      reject(new Error("Неверно указан уровень загрязнения"));
      return;
    }
    setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
  }).catch((error) => {
    console.log(`Уборка проводится не будет.
      ${error}`);
  });
};

const cleanRoomsStepByStep = (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) => {
  cleanRoom(dirtyLevel_1)
    .then((result) => {
      if (result) {
        console.log(`Уборка проведена успешно за ${result} секунд`);
      }
      return cleanRoom(dirtyLevel_2);
    })
    .then((result) => {
      if (result) {
        console.log(`Уборка проведена успешно за ${result} секунд`);
      }
      return cleanRoom(dirtyLevel_3);
    })
    .then((result) => {
      if (result) {
        console.log(`Уборка проведена успешно за ${result} секунд`);
      }
    });
};

cleanRoomsStepByStep(2, 20, 1);
