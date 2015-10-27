class PostPageController {
  static $inject = ['$routeParams', 'Post'];

  constructor($routeParams, Post) {
    this.comments = [];
    this.post = {};
    this.user = {};

    Post.get({
      id: $routeParams.post,
      _embed: 'comments',
      _expand: ['user', 'post']
    }, (post) => {
      this.post = post;
      this.comments = post.comments;
      this.user = post.user;
    });
  }
}

export default PostPageController;
