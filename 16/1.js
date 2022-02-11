const cleanRoom = new Promise((resolve) => {
  setTimeout(() => resolve("Команата убрана"), 5000);
});
cleanRoom.then(console.log);
