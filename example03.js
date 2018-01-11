var app = angular.module('app', []);

app.controller('indexCtrl', function($scope) {
  $scope.items = [{title:'Iphone 8', price: 30000, quantity: 1}, {title:'Iphone X', price: 60000, quantity:1}]

  $scope.getTotal = function(){
    return $scope.items.reduce( function(a, b){
        return a + b.price * b.quantity;
    }, 0);
  }
})
