const routes = [
  '$stateProvider', '$locationProvider',
  ($stateProvider, $locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
      .state('home', {
        url: '/',
        template: '<page></page>'
      })
      .state('page', {
        url: '/page/:pageNumber',
        template: '<page></page>'
      })
      .state('post', {
        url: '/post/:id',
        template: '<post-page></post-page>'
      });
  }
];

export default routes;
