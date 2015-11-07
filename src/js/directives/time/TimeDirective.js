class TimeDirective {
  constructor() {
    this.restrict = 'A';

    this.controller = 'TimeController';
    this.controllerAs = 'time';
  }
}

export default (...args) => {
  return new TimeDirective(...args);
};

export { TimeDirective };
