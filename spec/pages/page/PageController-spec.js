import PageController from 'pages/page/PageController';

describe('PageController', () => {
  var setTitle,
      Post,
      posts;

  before(() => {
    posts = require('../../fixtures/posts.json');

    setTitle = () => {};
  });

  beforeEach(() => {
    Post = {
      $page: () => ({
        $then: (cb) => cb(posts)
      })
    };
  });

  it('should load page 1 if no page is passed', () => {
    let controller = new PageController({}, setTitle, Post);

    expect(controller.pageNumber).to.be.equal(1);
  });

  it('should parse page to Number', () => {
    let controller = new PageController({
      pageNumber: '2'
    }, setTitle, Post);

    expect(controller.pageNumber).to.be.equal(2);
  });
});
