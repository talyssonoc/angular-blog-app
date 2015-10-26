const routes = [
  '$routeProvider',
  ($routeProvider) => {
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
