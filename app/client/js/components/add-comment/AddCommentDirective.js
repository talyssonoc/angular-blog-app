import addCommentTemplate from './add-comment.html';

class AddCommentDirective {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.scope = {};

    this.controller = 'AddCommentController';
    this.controllerAs = 'ctrl';

    this.bindToController = {
      users: '=',
      postId: '='
    };

    this.template = addCommentTemplate;
  }
}

export default (...args) => {
  return new AddCommentDirective(...args);
};

export { AddCommentDirective };
