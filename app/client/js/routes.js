const routes = [
  '$routeProvider', '$locationProvider',
  ($routeProvider, $locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
    .when('/', {
      template: '<page></page>'
    })
    .when('/page/:page', {
      template: '<page></page>'
    })
    .when('/post/:post', {
      template: '<post-page></post-page>'
    });
  }
];

export default routes;
