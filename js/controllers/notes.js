'use strict';

keep.controller('notesController', ($scope) => {
    var notes = {
        "count": 2,
        "last": 5,
        "data": [null,
            null,
            null, {
                "id": 4,
                "content": "fasf\nsfsdfew",
                "category": "4",
                "color": "6",
                "checkboxStatus": false,
                "checkboxData": []
            }, {
                "id": 5,
                "content": "fawewf",
                "category": "5",
                "color": 3,
                "checkboxStatus": false,
                "checkboxData": []
            }
        ]
    };
    var _update = function($scope, notes) {
        $scope.notes = notes.data.filter((el) => {
            if (el) {
                return el;
            }
        });
    }
    _update($scope, notes);

    $scope.detectShiftEnter = function(event){
    	var keyCode = event.which || event.keyCode;
    	if(keyCode == 13 && event.shiftKey){
    		this.addNote(this.newNote);
    		event.preventDefault();
    	}
    }

    $scope.addNote = function() {
        notes.count++;
        notes.last++;
        notes.data.push({
            id: notes.last,
            content: this.newNote,
            category: 0,
            color: "3",
            checkboxStatus: false,
            checkboxData: []
        });
        this.newNote = "";
        _update($scope, notes);
    }

    $scope.filter = function(text){
    	return text.replace(/(\n)/g,"<br>");
    }
});
