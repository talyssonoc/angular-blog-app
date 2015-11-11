class PageController {
  static $inject = [
    '$routeParams',
    'setTitle',
    'blogConfig',
    'Post'
  ];

  constructor($routeParams, setTitle, blogConfig, Post) {
    this.deps = {
      $routeParams,
      setTitle,
      blogConfig,
      Post
    };

    this.pageNumber = Number($routeParams.page) || 1;

    this.title = `Blog app - Page ${this.pageNumber}`;

    setTitle(this.title);

    this.loadPosts();
  }

  loadPosts() {
    const {
      Post,
      blogConfig
    } = this.deps;

    Post.page({
      _start: (this.pageNumber - 1) * blogConfig.get('postsPerPage')
    }, (posts) => {
      this.posts = posts;
    });
  }
}

export default PageController;
