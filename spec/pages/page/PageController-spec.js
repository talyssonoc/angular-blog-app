import PageController from 'pages/page/PageController';

describe('PageController', () => {
  var blogConfig,
      setTitle,
      Post;

  before(() => {
    setTitle = () => {};

    blogConfig = {
      get() {}
    };

    Post = {
      page() {}
    };
  });

  it('should load page 1 if no page is passed', () => {
    let controller = new PageController({}, setTitle, blogConfig, Post);

    expect(controller.pageNumber).to.be.equal(1);
  });

  it('should parse page to Number', () => {
    let controller = new PageController({
      pageNumber: '2'
    }, setTitle, blogConfig, Post);

    expect(controller.pageNumber).to.be.equal(2);
  });

  it('should read number of posts per page from config', () => {
    sinon.stub(blogConfig, 'get');

    let controller = new PageController({}, setTitle, blogConfig, Post);

    expect(blogConfig.get.calledWith('postsPerPage')).to.be.true;

    blogConfig.get.restore();
  });
});
