class PageController {
  static $inject = [
    '$stateParams',
    'setTitle',
    'blogConfig',
    'Post'
  ];

  constructor($stateParams, setTitle, blogConfig, Post) {
    this.deps = {
      $stateParams,
      setTitle,
      blogConfig,
      Post
    };

    this.pageNumber = Number($stateParams.pageNumber) || 1;

    this.title = `Blog app - Page ${this.pageNumber}`;

    setTitle(this.title);

    this.loadPosts();
  }

  loadPosts() {
    const {
      Post,
      blogConfig
    } = this.deps;

    Post.$page(this.pageNumber).$then((posts) => {
      this.posts = posts;
    });
  }
}

export default PageController;
