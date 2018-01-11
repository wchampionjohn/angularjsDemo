function TodoCrtlRemovable($scope) {
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

}
