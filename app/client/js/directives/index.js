import angular from 'angular';

import addComment from 'directives/add-comment';
import comments from 'directives/comments';
import layout from 'directives/layout';
import post from 'directives/post';

import time from 'directives/time';

angular.module('directives', [
  addComment,
  comments,
  layout,
  post,

  time
]);

export default 'directives';
