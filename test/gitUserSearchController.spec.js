describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope
    ctrl = $controller('GitUserSearchController', {
      $scope: scope
    });
  }));

  it('should initialize with an empty search result and term', function() {
    expect(scope.searchResult).toBeUndefined();
    expect(scope.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {

    var items = [{
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      }, {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
    }];

    it('should display search results', function() {
      scope.searchTerm = 'world';
      scope.doSearch();
      scope.$apply();
      expect(scope.searchResult.items).toEqual(items);
    });
  });
});