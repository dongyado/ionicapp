angular.module('starter.controllers', [])

.controller('DashCtrl', function($rootScope, $scope, $http, Config, Streams, Tags) {

    $scope.loadMore = function(){
        Streams.loadMore().then(function(data){
            $scope.streams = data;
            $rootScope.$broadcast('scroll.infiniteScrollComplete');
        });
    }

    Tags.getTags().then(function(data){
        $scope.tags = data;
    });

    $scope.$on('$stateChangeSuccess', function() {
        $scope.loadMore();
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
