app.controller("songctrl", function ($scope, songfactory) {
    var promise = songfactory.talkToServer();
    for (var i = 1; i <= 10; i++) {
        console.log("Doing some thing else", i);
    }
    promise.then(function (data) {
        $scope.data = data;
    }, function (error){ 
        $scope.error = error;
    });
});