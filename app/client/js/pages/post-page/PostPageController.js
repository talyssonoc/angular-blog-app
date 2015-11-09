class PostPageController {
  static $inject = [
    '$routeParams',
    'setTitle',
    'Post'
  ];

  constructor($routeParams, setTitle, Post) {
    this.deps = {
      $routeParams,
      setTitle,
      Post
    };

    this.postId = $routeParams.post;

    this.comments = [];
    this.post = {};
    this.user = {};

    this.loadPost();
  }

  loadPost() {
    const {
      setTitle,
      Post
    } = this.deps;

    Post.get({
      id: this.postId,
      _embed: 'comments',
      _expand: ['user', 'post']
    }, (post) => {
      setTitle(`${post.title} - Blog app`);

      this.post = post;
      this.comments = post.comments;
      this.user = post.user;
    });
  }
}

export default PostPageController;
