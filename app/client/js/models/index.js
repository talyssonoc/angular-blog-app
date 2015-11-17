import angular from 'angular';

import User from './User';
import Post from './Post';
import Comment from './Comment';
import Category from './Category';

angular
  .module('models', [])
  .factory('User', User)
  .factory('Post', Post)
  .factory('Comment', Comment)
  .factory('Category', Category);

export default 'models';
