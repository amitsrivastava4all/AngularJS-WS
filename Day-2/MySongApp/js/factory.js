app.factory("songfactory",function($http,$q){
    // $http is predefine service in angular
    // $http is used to talk to the server (WebService)
    //$q - it is again a predefine service
    // it represent promise
    // $http.post()
    function talkToServer(){
    var serverPromise = $q.defer();    
    $http.get("https://glacial-everglades-47258.herokuapp.com/apple").then(pass,fail);
    function pass(data){
        // this will call when server give the result
        serverPromise.resolve(data);
    }
    function fail(error){
        // this will call when server give the error
        serverPromise.reject(error);
    }
        return serverPromise.promise;
    }
    var object = {
      "talkToServer":talkToServer  
    };
    return object;
});





