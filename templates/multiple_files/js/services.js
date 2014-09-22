'use strict';

angular.module('test.app').service('Blog', ['$resource',
  function ($resource) {
    return $resource('/api', {},
      {update: {method: 'PUT'}}
    );
  }
]);