class PostPageController {
  static $inject = [
    '$stateParams',
    'setTitle',
    'eventEmitter',
    'Post',
    'User',
    'Comment'
  ];

  constructor($stateParams, setTitle, eventEmitter, Post, User, Comment) {
    this.deps = {
      $stateParams,
      setTitle,
      eventEmitter,
      Post,
      User,
      Comment
    };

    this.postId = $stateParams.id;

    this.comments = [];
    this.post = {};
    this.user = {};

    this.loadPost();

    eventEmitter.on('NEW_COMMENT', (event, commentData) => {
      this.addComment(commentData);
    });
  }

  loadPost() {
    const {
      setTitle,
      Post,
      User
    } = this.deps;

    User.$search().$then((users) => {
      this.users = users;
    });

    Post.$find(this.postId, {
      _embed: 'comments',
      _expand: ['user', 'category']
    }).$then((post) => {
      this.title = `${post.title} - Blog app`;
      setTitle(this.title);

      this.post = post;
      this.comments = post.comments;
      this.user = post.user;
      this.category = post.category;
    });
  }

  addComment(commentData) {
    const {
      Comment
    } = this.deps;

    commentData.post = this.post;

    Comment.$build(commentData).$save().$then(() => {
      this.post.comments.$refresh((comments) => {
        this.comments = comments;
      });
    });

  }
}

export default PostPageController;
