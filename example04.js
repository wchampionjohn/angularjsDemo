var app = angular.module('app', []);

app.controller('TodoCrtlRemovable', function($scope) {
  $scope.newItem = '';
  $scope.todoList = [];
  $scope.addItem = function(){
    if(this.newItem){
      this.todoList.push({label:this.newItem,isFinish:false});
      this.newItem = '';
    }
  }
  $scope.removeItem = function(item){
    item.isFinish = true;
  }

  $scope.deleteItem = function(item){
     $scope.todoList = $scope.todoList.filter(function(i){
      return i != item
    })
  }
  $scope.clear = function(){
    $scope.todoList = []
  }

})
