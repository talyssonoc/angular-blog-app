import PostPageController from 'pages/post-page/PostPageController';

describe('PostPageController', function() {
  var eventEmitter,
      setTitle,
      Post,
      User,
      Comment,
      postData,
      usersData;

  before(function() {
    postData = require('../../fixtures/posts.json')[0];
    usersData = require('../../fixtures/users.json');

    postData.user = usersData[0];

    eventEmitter = {
      on() {},
      emit() {}
    };

    setTitle = () => {};

    Post = {
      $find: () => ({
        $then: (cb) => cb(postData)
      })
    };

    User = {
      $search: () => ({
        $then: (cb) => cb(usersData)
      })
    }

    Comment = {};
  });

  after(function() {
    delete postData.user;
  });

  it('should query the post and users', function() {
    sinon.spy(Post, '$find');
    sinon.spy(User, '$search');

    let controller = new PostPageController({
      id: 1
    },
    setTitle, eventEmitter, Post, User, Comment);

    expect(Post.$find.called).to.be.true;
    expect(User.$search.called).to.be.true;

    expect(controller.post).to.be.eql(postData);
    expect(controller.comments).to.be.eql(postData.comments);
    expect(controller.user).to.be.eql(postData.user);
    expect(controller.users).to.be.eql(usersData);

    Post.$find.restore();
    User.$search.restore();
  });
});
