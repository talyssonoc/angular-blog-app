class PostPageController {
  static $inject = ['$routeParams', 'Post'];

  constructor($routeParams, Post) {
    this.comments = [];
    this.post = {};

    Post.get({
      id: $routeParams.post,
      _embed: 'comments'
    }, (post) => {
      this.post = post;
      this.comments = post.comments;
    });
  }
}

export default PostPageController;
