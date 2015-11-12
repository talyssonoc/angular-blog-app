import angular from 'angular';

import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';

import routes from 'routes';

import directives from 'directives';
import resources from 'resources';
import services from 'services';
import pages from 'pages';

const app = angular.module('blogApp', [
  ngResource,

  uiRouter,

  directives,
  resources,
  services,
  pages
]);

app.config(routes);
