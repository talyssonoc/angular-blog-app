class AddCommentController {
  static $inject = ['eventEmitter'];

  constructor(eventEmitter) {
    this.deps = {
      eventEmitter
    };
  }

  submitComment() {
    const {
      eventEmitter
    } = this.deps;


    let commentData = {
      body: this.commentBody,
      user: this.author
    };

    eventEmitter.emit('NEW_COMMENT', commentData);
    this.commentBody = '';
  }
}

export default AddCommentController;
