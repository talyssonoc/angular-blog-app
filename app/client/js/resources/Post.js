const PostFactory = [
  '$resource', 'blogConfig',
  ($resource, blogConfig) => {
    const apiUrl = blogConfig.get('apiUrl');

    const Post = $resource(`${ apiUrl }/posts/:id`,
    null,
    {
      page: {
        url: `${ apiUrl }/posts`,
        isArray: true,
        params: {
          _limit: blogConfig.get('postsPerPage')
        }
      },
      comments: {
        url: `${ apiUrl }/posts/:postId/comments`,
        isArray: true
      }
    });

    return Post;
  }
];

export default PostFactory;
