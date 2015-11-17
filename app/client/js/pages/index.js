import angular from 'angular';

import page from 'pages/page';
import postPage from 'pages/post-page';
import createPost from 'pages/create-post';

angular.module('pages', [
  page,
  postPage,
  createPost
]);

export default 'pages';
