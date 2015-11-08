import angular from 'angular';

import PageController from './PageController';
import PageDirective from './PageDirective';

angular
  .module('page', [])
  .controller('PageController', PageController)
  .directive('page', PageDirective);

export default 'page';
