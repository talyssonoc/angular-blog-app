import layoutTemplate from './layout.html';

class LayoutDirective {
  constructor() {
    this.restrict = 'E';

    this.template = layoutTemplate;
    this.transclude = true;
  }
}

export default (...args) => {
  return new LayoutDirective(...args);
};

export { LayoutDirective };
