'use strict';

keep.controller('categoriesController', ($scope) => {
    var categories = {
        "count": 6,
        "data": [{
            "id": 1,
            "name": "All"
        }, {
            "id": 2,
            "name": "Home"
        }, {
            "id": 3,
            "name": "Personal"
        }, {
            "id": 4,
            "name": "Work"
        }, {
            "id": 5,
            "name": "Asdf"
        }, {
            "id": 6,
            "name": "Ok"
        }]
    };
    $scope.categories = categories.data;
    $scope.detectEnter = function(event){
    	var keyCode = event.which || event.keyCode;
    	if(keyCode == 13){
    		this.addCat(this.newCategory);
    		event.preventDefault();
    	}
    }
    $scope.addCat = function(){
    	categories.count++;
    	categories.data.push({
    		id: categories.count,
    		name: this.newCategory
    	});
    	this.newCategory = "";
    }
    $scope.switchCat = function(id){
    	console.log(id);
    }
});
