var app = angular.module('app', []);

app.controller('indexCtrl', function($scope) {
  $scope.items = [
    {title:'Iphone 8', price: 30000, quantity: 1, remain: 5},
    {title:'Iphone X', price: 60000, quantity:1, remain: 3}
  ]

  $scope.getTotal = function(){
    return $scope.items.reduce( function(result, item){
        return result + item.price * item.quantity;
    }, 0);
  }


  //  滿100000 運費 1000
  //  滿200000 運費 500
  //  滿300000 運費 0
  $scope.getCosts = function(){
    var total = $scope.getTotal()

    if(total > 300000) {
      return 0
    } else if (total > 200000) {
      return 500
    } else if (total > 100000) {
      return 1000
    }

    return 2000
  }

  $scope.updateQuantity = function(item) {
    if(item.remain < item.quantity) {
      item.quantity = item.remain
      alert('商品超過最大數量')
    }

    if(item.quantity < 1) {
      item.quantity = 1
      alert('商品數量不能小於1')
    }
  }
})
