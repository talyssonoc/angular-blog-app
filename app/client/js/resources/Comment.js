const CommentFactory = [
  'restmod', 'blogConfig',
  (restmod, blogConfig) => {
    const apiUrl = blogConfig.get('apiUrl');

    const Comment = restmod.model(`${ apiUrl }/comments`)
    .mix({
      post: {
        belongsTo: 'Post'
      },
      user: {
        belongsTo: 'User'
      }
    });

    return Comment;
  }
];

export default CommentFactory;
