import pageTemplate from './page.html';

class PageDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};

    this.controller = 'PageController';
    this.controllerAs = 'ctrl';

    this.template = pageTemplate;
  }
}

export default (...args) => {
  return new PageDirective(...args);
};

export { PageDirective };
