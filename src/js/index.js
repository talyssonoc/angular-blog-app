import angular from 'angular';

import ngResource from 'angular-resource';
import ngRoute from 'angular-route';

import routes from 'routes';

import blogConfig from 'services/blogConfig';

import directives from 'directives';
import resources from 'resources';
import pages from 'pages';

const app = angular.module('blogApp', [
  ngResource,
  ngRoute,

  directives,
  resources,
  pages
]);

app.config(routes);

app.factory('blogConfig', blogConfig);
