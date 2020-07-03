angular
  .module('directoryApp', [])
  .controller('directoryController', ($scope) => {
    $scope.list = [
      { name: 'Mike', age: 5999 },
      { name: 'Pep', age: 9 },
      { name: 'Ron', age: 5 },
      { name: 'Don', age: 4 },
    ];
  });
