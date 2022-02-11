class StateMachine {
  state = [];

  add(cb, seconds) {
    this.cb = cb;
    this.seconds = seconds * 1000;
    this.state.push({ cb: this.cb, seconds: this.seconds });
    return this;
  }

  run() {
    this.state.forEach((obj) => {
      this.timer = setTimeout(obj.cb, obj.seconds);
      obj.timer = this.timer;
    });
  }

  stopAll() {
    this.state.forEach((obj) => {
      clearTimeout(obj.timer);
    });
  }
}

const stateMachine = new StateMachine();

stateMachine
  .add(() => {
    console.log("Приветствую вас через секунду");
  }, 1)

  .add(() => {
    console.log("Передаю привет через две секунды");
    stateMachine.stopAll();
  }, 2)

  .add(() => {
    console.log("Это не должно вызваться никогда!");
  }, 3);

stateMachine.run();
