import PageController from 'pages/page/PageController';

describe('PageController', function() {
  var setTitle,
      Post,
      posts;

  before(function() {
    posts = require('../../fixtures/posts.json');

    setTitle = () => {};
  });

  beforeEach(function() {
    Post = {
      $page: () => ({
        $then: (cb) => cb(posts)
      })
    };
  });

  it('should load page 1 if no page is passed', function() {
    let controller = new PageController({}, setTitle, Post);

    expect(controller.pageNumber).to.be.equal(1);
  });

  it('should parse page to Number', function() {
    let controller = new PageController({
      pageNumber: '2'
    }, setTitle, Post);

    expect(controller.pageNumber).to.be.equal(2);
  });
});
