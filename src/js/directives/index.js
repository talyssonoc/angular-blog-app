import angular from 'angular';

import comments from 'directives/comments';
import layout from 'directives/layout';
import post from 'directives/post';

import time from 'directives/time';

angular.module('directives', [
  comments,
  layout,
  post,

  time
]);

export default 'directives';
