import angular from 'angular';

import ngRoute from 'angular-route';
import ngResource from 'angular-resource';

import routes from 'routes';

import Post from 'resources/Post';
import Comment from 'resources/Comment';

import blogConfig from 'services/blogConfig';

import BlogController from 'BlogController';

import PageController from 'pages/page/PageController';
import PageDirective from 'pages/page/PageDirective';

import PostPageController from 'pages/post-page/PostPageController';
import PostPageDirective from 'pages/post-page/PostPageDirective';

import PostController from 'directives/post/PostController';
import PostDirective from 'directives/post/PostDirective';

const app = angular.module('blogApp', [
  ngRoute,
  ngResource
]);

app.config(routes);

app.factory('blogConfig', blogConfig);

app.factory('Post', Post);
app.factory('Comment', Comment);

app.controller('BlogController', BlogController);

app.controller('PageController', PageController);
app.directive('page', PageDirective);

app.controller('PostPageController', PostPageController);
app.directive('postPage', PostPageDirective);

app.controller('PostController', PostController);
app.directive('post', PostDirective);
