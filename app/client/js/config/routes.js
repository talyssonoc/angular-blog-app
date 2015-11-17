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
        url: '/post/{id:int}',
        template: '<post-page></post-page>'
      })
      .state('createPost', {
        url: '/post/new',
        template: '<create-post></create-post>'
      });
  }
];

export default routes;
