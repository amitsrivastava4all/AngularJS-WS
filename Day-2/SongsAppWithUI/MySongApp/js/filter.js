app.filter("initcap",function(){
    return function(str){
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    }
})


app.filter("trustUrl",  function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    });