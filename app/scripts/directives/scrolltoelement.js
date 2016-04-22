'use strict';

/**
 * @ngdoc directive
 * @name celebrityCruisesApp.directive:scrollToElement
 * @description
 * # scrollToElement
 */
angular.module('celebrityCruisesApp')
    .directive('scrollToElement', function () {
        return function (scope, element, attrs) {
            $(element).click(function () {
                $("html, body").animate({scrollTop: $(attrs.scrollToElement).offset().top}, 1000)
            });
        };
    });
