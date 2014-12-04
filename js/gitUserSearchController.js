var searchResource = $resource('https://api.github.com/search/users');
githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {
  $scope.searchResult = searchResource.get({
      q: $scope.searchTerm
  });
});