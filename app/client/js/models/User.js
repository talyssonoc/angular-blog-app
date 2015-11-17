const UserFactory = [
  'restmod', 'blogConfig',
  (restmod, blogConfig) => {
    const apiUrl = blogConfig.get('apiUrl');

    const User = restmod.model(`${ apiUrl }/users`)
    .mix({
      posts: {
        hasMany: 'Post',
        inverseOf: 'user'
      },
      comments: {
        hasMany: 'Comment',
        inverseOf: 'user'
      }
    });

    return User;
  }
];

export default UserFactory;
