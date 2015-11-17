import angular from 'angular';

import addComment from './add-comment';
import comments from './comments';
import layout from './layout';
import post from './post';

angular.module('components', [
  addComment,
  comments,
  layout,
  post
]);

export default 'components';
