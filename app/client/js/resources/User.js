const UserFactory = [
  '$resource', 'blogConfig',
  ($resource, blogConfig) => {
    const apiUrl = blogConfig.get('apiUrl');

    const User = $resource(`${ apiUrl }/users/:id`);

    return User;
  }
];

export default UserFactory;
