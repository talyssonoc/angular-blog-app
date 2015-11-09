import angular from 'angular';

import ngResource from 'angular-resource';
import ngRoute from 'angular-route';

import routes from 'routes';

import directives from 'directives';
import resources from 'resources';
import services from 'services';
import pages from 'pages';

const app = angular.module('blogApp', [
  ngResource,
  ngRoute,

  directives,
  resources,
  services,
  pages
]);

app.config(routes);
