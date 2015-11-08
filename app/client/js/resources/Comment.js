const CommentFactory = [
  '$resource', 'blogConfig',
  ($resource, blogConfig) => {
    const apiUrl = blogConfig.get('apiUrl');

    const Comment = $resource(`${ apiUrl }/comments/:id`,
    null, {
      fromPost: {
        isArray: true,
        url: `${ apiUrl }/posts/:postId/comments`
      }
    });

    return Comment;
  }
];

export default CommentFactory;
