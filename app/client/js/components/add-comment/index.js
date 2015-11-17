import angular from 'angular';

import AddCommentController from './AddCommentController';
import AddCommentDirective from './AddCommentDirective';

angular
  .module('addComment', [])
  .controller('AddCommentController', AddCommentController)
  .directive('addComment', AddCommentDirective);

export default 'addComment';
