import angular from 'angular';

import LayoutDirective from './LayoutDirective';

angular
  .module('layout', [])
  .directive('layout', LayoutDirective);

export default 'layout';
