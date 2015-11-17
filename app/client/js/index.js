import angular from 'angular';

import restmod from 'angular-restmod';

import uiRouter from 'angular-ui-router';

import routes from 'config/routes';
import restmodConfig from 'config/restmod';

import components from 'components';
import directives from 'directives';
import services from 'services';
import models from 'models';
import pages from 'pages';

const app = angular.module('blogApp', [
  'restmod',
  uiRouter,

  components,
  directives,
  services,
  models,
  pages
]);

app.config(routes);
app.config(restmodConfig);
