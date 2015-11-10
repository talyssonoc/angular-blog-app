import angular from 'angular';

import eventEmitter from 'services/eventEmitter';
import blogConfig from 'services/blogConfig';
import setTitle from 'services/setTitle';

angular.module('services', [])
        .factory('eventEmitter', eventEmitter)
        .factory('blogConfig', blogConfig)
        .factory('setTitle', setTitle);

export default 'services';
