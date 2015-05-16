angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, Config, Streams) {
    var _headers = {
          'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        };

    //$http({
    //    method: 'GET', 
    //    url:Config.apiUrl + 'stream/hot', 
    //    headers : _headers})
    //    .success(function(data, status){
    //        console.log(data); 
    //        $scope.streams = data.data;
    //    })
    //    .finally(function(err){
    //    });
    //
    //
    //
    var data = Streams.getApiData();
     data.then(function(data){
        $scope.streams = data.data.data.list;
     });
})


.controller('StreamDetailCtrl', function($scope, $stateParams) {
    $scope.stream = {};
    console.log($stateParams);
    $scope.stream.src = 'http://app.lerays.com/stream/view?stream_id='+$stateParams.streamId+'&_ack='+$stateParams.streamAck;
    $scope.stream.title = $stateParams.streamTitle;
})

.controller('FeedCtrl', function($scope) {
    $scope.link = '订阅'
})

.controller('FindCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    console.log('test');
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
