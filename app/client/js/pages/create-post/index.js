import angular from 'angular';

import CreatePostController from './CreatePostController';
import CreatePostDirective from './CreatePostDirective';

angular
  .module('createPost', [])
  .controller('CreatePostController', CreatePostController)
  .directive('createPost', CreatePostDirective);

export default 'createPost';
