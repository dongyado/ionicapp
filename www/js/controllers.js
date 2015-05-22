angular.module('starter.controllers', [])

.controller('DashCtrl', function($rootScope, $scope, $http, Config, Streams) {

    /*
    Streams.getApiData().then(function(data){
        console.log(data);
        $scope.streams = data.data.list;
        $rootScope.pageno = data.data.pageno;
        $rootScope.nexttime = data.data.nexttime;
        $rootScope.nextsign = data.data.nextsign;
        $rootScope.prevtime = data.data.prevtime;
        $rootScope.prevsign = data.data.prevsign;
        console.log($rootScope);
    });
    $scope.loadMore = function() {
        Streams.getApiData(
            $rootScope.pageno + 1,
            $rootScope.nexttime,
            $rootScope.nextsign,
            'n'
        ).then(function(data){
            
            //console.log($rootScope.streamlist);
            $rootScope.streamlist = $rootScope.streamlist.concat(data.data.list);

            $scope.streams = $rootScope.streamlist;
            //
            //$scope.streams = data.data.list;

            $rootScope.pageno = data.data.pageno;
            $rootScope.nexttime = data.data.nexttime;
            $rootScope.nextsign = data.data.nextsign;
            $rootScope.prevtime = data.data.prevtime;
            $rootScope.prevsign = data.data.prevsign;

            $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };
    */

    console.log(Streams.loadMore());
    /*
    $scope.loadMore = Streams.loadMore().then(function(data){
        console.log(data);
    });
    */

    $scope.$on('$stateChangeSuccess', function() {
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
