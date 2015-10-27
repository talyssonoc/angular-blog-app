class PageController {
  static $inject = ['$routeParams', 'blogConfig', 'Post'];

  constructor($routeParams, blogConfig, Post) {
    this.page = Number($routeParams.page) || 0;

    Post.page({
      _start: this.page * blogConfig.get('postsPerPage')
    }, (posts) => {
      this.posts = posts;
    });
  }
}

export default PageController;
