'use strict';

describe('Directive: scrollToElement', function () {

  // load the directive's module
  beforeEach(module('celebrityCruisesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scroll-to-element></scroll-to-element>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollToElement directive');
  }));
});
