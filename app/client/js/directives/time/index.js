import angular from 'angular';

import TimeController from './TimeController';
import TimeDirective from './TimeDirective';

angular
  .module('time', [])
  .controller('TimeController', TimeController)
  .directive('time', TimeDirective);

export default 'time';
