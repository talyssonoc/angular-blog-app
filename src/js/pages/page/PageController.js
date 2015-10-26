class PageController {
  static $inject = ['$routeParams', 'blogConfig', 'Post'];

  constructor($routeParams, blogConfig, Post) {
    this.data = {
      page: Number($routeParams.page) || 0
    };

    Post.page({
      _start: this.data.page * blogConfig.get('postsPerPage')
    }, (posts) => {
      this.data.posts = posts;
    });
  }
}

export default PageController;
