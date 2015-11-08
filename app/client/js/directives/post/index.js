import angular from 'angular';

import PostController from './PostController';
import PostDirective from './PostDirective';

angular
  .module('post', [])
  .controller('PostController', PostController)
  .directive('post', PostDirective);

export default 'post';
