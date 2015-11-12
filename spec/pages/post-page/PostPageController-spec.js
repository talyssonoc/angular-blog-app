import PostPageController from 'pages/post-page/PostPageController';

describe('PostPageController', () => {
  var eventEmitter,
      setTitle,
      Post,
      User,
      postData;

  before(() => {
    postData = {
      title: 'Post',
      comments: [],
      user: { name: 'User' }
    };

    eventEmitter = {
      on() {},
      emit() {}
    };

    setTitle = () => {};

    Post = {
      get(_, cb) {
        cb(postData);
      },
      comments() {}
    };

    User = {
      query() {}
    }
  });

  it('should query the post and users', () => {
    sinon.spy(Post, 'get');
    sinon.spy(User, 'query');

    let controller = new PostPageController({
      id: 1
    },
    setTitle, eventEmitter, Post, User);

    expect(Post.get.called).to.be.true;
    expect(User.query.called).to.be.true;

    expect(controller.post).to.be.eql(postData);
    expect(controller.comments).to.be.eql([]);
    expect(controller.user).to.be.eql(postData.user);

    Post.get.restore();
    User.query.restore();
  });
});
