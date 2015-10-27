import angular from 'angular';

import PostPageController from './PostPageController';
import PostPageDirective from './PostPageDirective';

angular
  .module('postPage', [])
  .controller('PostPageController', PostPageController)
  .directive('postPage', PostPageDirective);

export default 'postPage';
