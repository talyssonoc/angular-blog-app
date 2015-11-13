import angular from 'angular';

import restmod from 'angular-restmod';

import uiRouter from 'angular-ui-router';

import routes from 'config/routes';
import restmodConfig from 'config/restmod';

import directives from 'directives';
import resources from 'resources';
import services from 'services';
import pages from 'pages';

const app = angular.module('blogApp', [
  'restmod',
  uiRouter,

  directives,
  resources,
  services,
  pages
]);

app.config(routes);
app.config(restmodConfig);
