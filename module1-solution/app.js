(function() {
    'use strict';
  
    angular
      .module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      var vm = this;
  
      vm.lunchList    = '';
      vm.message      = '';
      vm.messageClass = '';
  
      vm.checkLunch = function() {
       
        if (!vm.lunchList || vm.lunchList.trim().length === 0) {
          vm.message      = 'Please enter data first';
          vm.messageClass = 'error';
          return;
        }
  
        var items = vm.lunchList
          .split(',')
          .filter(function(item) {
            return item.trim().length > 0;
          });
  
        if (items.length <= 3) {
          vm.message      = 'Enjoy!';
          vm.messageClass = 'success';
        } else {
          vm.message      = 'Too much!';
          vm.messageClass = 'success';
        }
      };
    }
  })();
  