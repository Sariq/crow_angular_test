'use strict';

angular.module('test.app')
  .controller('HomeController', ['$scope',
    function ($scope) {
      $scope.controllerName = 'HomeController';
    }
  ]
)
  .controller('HelpController', ['$scope',
    function ($scope) {
      $scope.controllerName = 'HelpController';
    }
  ]
)
 .controller('AboutController', ['$scope',
    function ($scope) {
      $scope.controllerName = 'AboutController';
    }
  ]
);