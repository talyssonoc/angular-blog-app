import PageController from 'pages/page/PageController';

describe('PageController', () => {
  var blogConfig,
      Post;

  before(() => {
    blogConfig = {
      get() {}
    };

    Post = {
      page() {}
    };
  });

  it('should load page 0 if no page is passed', () => {
    let controller = new PageController({}, blogConfig, Post);

    expect(controller.data.page).to.be.equal(0);
  });

  it('should parse page to Number', () => {
    let controller = new PageController({
      page: '1'
    }, blogConfig, Post);

    expect(controller.data.page).to.be.equal(1);
  });

  it('should read number of posts per page from config', () => {
    sinon.stub(blogConfig, 'get');

    let controller = new PageController({}, blogConfig, Post);

    expect(blogConfig.get.calledWith('postsPerPage')).to.be.true;

    blogConfig.get.restore();
  });
});
