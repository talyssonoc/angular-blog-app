import angular from 'angular';

import Post from 'resources/Post';
import Comment from 'resources/Comment';

angular
  .module('resources', [])
  .factory('Post', Post)
  .factory('Comment', Comment);

export default 'resources';
