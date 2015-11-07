class PageController {
  static $inject = ['$routeParams', 'blogConfig', 'Post'];

  constructor($routeParams, blogConfig, Post) {
    this.page = Number($routeParams.page) || 1;

    Post.page({
      _start: (this.page - 1) * blogConfig.get('postsPerPage')
    }, (posts) => {
      this.posts = posts;
    });
  }
}

export default PageController;
