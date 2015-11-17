class CommentsController {
  constructor() {
    this.showComments = true;
  }

  toggleComments() {
    this.showComments = !this.showComments;
  }
}

export default CommentsController;
