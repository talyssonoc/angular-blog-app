import layoutTemplate from 'directives/layout/layout.html';

class LayoutDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.template = layoutTemplate;
    this.transclude = true;
  }
}

export default (...args) => {
  return new LayoutDirective(...args);
};

export { LayoutDirective };
