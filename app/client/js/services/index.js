import angular from 'angular';

import blogConfig from 'services/blogConfig';
import setTitle from 'services/setTitle';

angular.module('services', [])
        .factory('blogConfig', blogConfig)
        .factory('setTitle', setTitle);

export default 'services';
