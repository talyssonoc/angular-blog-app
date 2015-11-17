import createPostTemplate from './create-post.html';

class CreatePostDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};

    this.controller = 'CreatePostController';
    this.controllerAs = 'ctrl';

    this.template = createPostTemplate;
  }
}

export default (...args) => {
  return new CreatePostDirective(...args);
};

export { CreatePostDirective };
