class PostPageController {
  static $inject = ['$routeParams', 'Post', 'Comment'];

  constructor($routeParams, Post, Comment) {
    this.data = {
      showComments: false,
      comments: [],
      post: {}
    };

    Post.get({
      id: $routeParams.post
    }, (post) => {
      this.data.post = post;
    });

    Comment.fromPost({
      postId: $routeParams.post
    }, (comments) => {
      this.data.comments = comments;
    });
  }

  toggleComments() {
    this.data.showComments = !this.data.showComments;
  }
}

export default PostPageController;
