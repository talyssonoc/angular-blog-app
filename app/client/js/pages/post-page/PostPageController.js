class PostPageController {
  static $inject = [
    '$stateParams',
    'setTitle',
    'eventEmitter',
    'Post',
    'User'
  ];

  constructor($stateParams, setTitle, eventEmitter, Post, User) {
    this.deps = {
      $stateParams,
      setTitle,
      eventEmitter,
      Post,
      User
    };

    this.postId = $stateParams.id;

    this.comments = [];
    this.post = {};
    this.user = {};

    this.loadPost();

    eventEmitter.on('NEW_COMMENT', () => {
      this.queryComments();
    });
  }

  loadPost() {
    const {
      setTitle,
      Post,
      User
    } = this.deps;

    User.query((users) => {
      this.users = users;
    });

    Post.get({
      id: this.postId,
      _embed: 'comments',
      _expand: ['user', 'post']
    }, (post) => {
      this.title = `${post.title} - Blog app`;
      setTitle(this.title);

      this.post = post;
      this.comments = post.comments;
      this.user = post.user;
    });
  }

  queryComments() {
    const {
      Post
    } = this.deps;

    Post.comments({
      postId: this.post.id
    }, (comments) => {
      this.comments = comments;
    });
  }
}

export default PostPageController;
