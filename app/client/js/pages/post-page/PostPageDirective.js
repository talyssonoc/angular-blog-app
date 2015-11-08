import postPageTemplate from './post-page.html';

class PostPageDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};

    this.controller = 'PostPageController';
    this.controllerAs = 'ctrl';

    this.template = postPageTemplate;
  }
}

export default (...args) => {
  return new PostPageDirective(...args);
};

export { PostPageDirective };
