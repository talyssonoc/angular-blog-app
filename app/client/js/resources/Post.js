const PostFactory = [
  'restmod', 'blogConfig',
  (restmod, blogConfig) => {
    const apiUrl = blogConfig.get('apiUrl');

    const Post = restmod.model(`${ apiUrl }/posts`)
    .mix({
      comments: {
        hasMany: 'Comment',
        inverseOf: 'post'
      },
      user: {
        belongsTo: 'User'
      },
      $extend: {
        Model: {
          $page(page) {
            return this.$search({
              _start: (page - 1) * blogConfig.get('postsPerPage'),
              _limit: blogConfig.get('postsPerPage')
            });
          }
        }
      }
    });

    return Post;
  }
];

export default PostFactory;
