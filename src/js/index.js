import angular from 'angular';

import ngRoute from 'angular-route';
import ngResource from 'angular-resource';

import routes from 'routes';

import Post from 'resources/Post';
import Comment from 'resources/Comment';

import blogConfig from 'services/blogConfig';

import BlogController from 'BlogController';

import LayoutDirective from 'directives/layout/LayoutDirective';

import CommentsController from 'directives/comments/CommentsController';
import CommentsDirective from 'directives/comments/CommentsDirective';

import PostController from 'directives/post/PostController';
import PostDirective from 'directives/post/PostDirective';

import PageController from 'pages/page/PageController';
import PageDirective from 'pages/page/PageDirective';

import PostPageController from 'pages/post-page/PostPageController';
import PostPageDirective from 'pages/post-page/PostPageDirective';

const app = angular.module('blogApp', [
  ngRoute,
  ngResource
]);

app.config(routes);

app.factory('blogConfig', blogConfig);

app.factory('Post', Post);
app.factory('Comment', Comment);

app.controller('BlogController', BlogController);

app.directive('layout', LayoutDirective);

app.controller('CommentsController', CommentsController);
app.directive('comments', CommentsDirective);

app.controller('PostController', PostController);
app.directive('post', PostDirective);

app.controller('PageController', PageController);
app.directive('page', PageDirective);

app.controller('PostPageController', PostPageController);
app.directive('postPage', PostPageDirective);
