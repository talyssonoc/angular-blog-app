class CreatePostController {
  static $inject = [
    '$state',
    'setTitle',
    'Post',
    'User',
    'Category'
  ];

  constructor($state, setTitle, Post, User, Category) {
    this.deps = {
      $state,
      setTitle,
      Post,
      User,
      Category
    };

    this.title = `Blog app - Create post`;

    this.post = Post.$build();

    setTitle(this.title);

    this.loadData();
  }

  loadData() {
    const {
      User,
      Category
    } = this.deps;

    User.$search().$then((users) => {
      this.users = users;
    });

    Category.$search().$then((categories) => {
      this.categories = categories;
    });
  }

  savePost() {
    const {
      $state
    } = this.deps;

    this.post.$save().$then((post) => {
      $state.go('post', {
        id: post.id
      }, {
        inherit: false
      });
    });
  }
}

export default CreatePostController;
