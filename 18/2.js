function cleanRoom(dirtyLevel) {
  return new Promise(function (resolve, reject) {
    if (dirtyLevel < 0 || dirtyLevel > 10) {
      reject(new Error("Неверно указан уровень загрязнения"));
      return;
    }
    setTimeout(
      () => resolve(`Уборка проведена успешно за ${dirtyLevel} секунд`),
      dirtyLevel * 1000
    );
  }).catch((err) => console.error(err));
}

const cleanRoomsStepByStep = async (
  dirtyLevel_1,
  dirtyLevel_2,
  dirtyLevel_3
) => {
  const cleanRoom1 = await cleanRoom(dirtyLevel_1);
  if (cleanRoom1) {
    console.log(cleanRoom1);
  }

  const cleanRoom2 = await cleanRoom(dirtyLevel_2);
  if (cleanRoom2) {
    console.log(cleanRoom2);
  }

  const cleanRoom3 = await cleanRoom(dirtyLevel_3);
  if (cleanRoom3) {
    console.log(cleanRoom3);
  }
};

cleanRoomsStepByStep(2, -2, 1);
