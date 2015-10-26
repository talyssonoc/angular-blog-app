import postTemplate from 'directives/post/post.html';

class PostDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};

    this.controller = 'PostController';
    this.controllerAs = 'ctrl';

    this.bindToController = {
      'data.post': '=post'
    };

    this.template = postTemplate;
  }
}

export default (...args) => {
  return new PostDirective(...args);
};

export { PostDirective };
