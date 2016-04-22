'use strict';

/**
 * @ngdoc function
 * @name celebrityCruisesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the celebrityCruisesApp
 */
angular.module('celebrityCruisesApp')
  .controller('MainCtrl', function ($uibModal) {
      var self = this;
      self.activeItinerary = 1;

      self.open = function () {
          var modalInstance = $uibModal.open({
              animation: true,
              templateUrl: 'modal.html'
          });
      };

      self.changeItineraryClick = function (step) {
          self.activeItinerary = step;
      };
  });
