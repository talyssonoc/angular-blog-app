import angular from 'angular';

import CommentsController from './CommentsController';
import CommentsDirective from './CommentsDirective';

angular
  .module('comments', [])
  .controller('CommentsController', CommentsController)
  .directive('comments', CommentsDirective);

export default 'comments';
