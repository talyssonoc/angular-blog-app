class AddCommentController {
  static $inject = ['Comment', 'eventEmitter'];

  constructor(Comment, eventEmitter) {
    this.deps = {
      Comment,
      eventEmitter
    };
  }

  submitComment() {
    const {
      Comment,
      eventEmitter
    } = this.deps;

    let comment = new Comment({
      body: this.commentBody,
      userId: this.author.id,
      postId: this.postId
    });

    comment.$save(() => {
      eventEmitter.emit('NEW_COMMENT');

      this.commentBody = '';
    });
  }
}

export default AddCommentController;
