import angular from 'angular';

import Post from 'resources/Post';
import User from 'resources/User';
import Comment from 'resources/Comment';

angular
  .module('resources', [])
  .factory('Post', Post)
  .factory('User', User)
  .factory('Comment', Comment);

export default 'resources';
