import angular from 'angular';

import comments from 'directives/comments';
import layout from 'directives/layout';
import post from 'directives/post';

angular.module('directives', [
  comments,
  layout,
  post
]);

export default 'directives';
