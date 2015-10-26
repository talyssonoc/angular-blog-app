const blogConfigService = () => {
  const config = {
    postsPerPage: 10,
    apiUrl: 'http://localhost:3000'
  };

  const blogConfig = {
    get: (key) => config[key],
    set: (key, value) => config[key] = value
  };

  return blogConfig;
};

export default blogConfigService;
