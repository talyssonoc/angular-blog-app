const CategoryFactory = [
  'restmod', 'blogConfig',
  (restmod, blogConfig) => {
    const apiUrl = blogConfig.get('apiUrl');

    const Category = restmod.model(`${ apiUrl }/categories`)
    .mix({
      post: {
        hasMany: 'Post',
        inverseOf: 'category'
      }
    });

    return Category;
  }
];

export default CategoryFactory;
