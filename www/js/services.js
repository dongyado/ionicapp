angular.module('starter.services', [])

// 配置信息
.factory('Config', function() {

    return {
        // baseUrl: 'http://localhost:3000',
        apiUrl: 'http://app.lerays.com/api/'

    };
})

.factory('Streams', function($http, Config, ApiEndpoint) {

    var getApiData = function(pageno, time, sign, operation) {
        var url = ApiEndpoint.url + '/stream/hot';
        //var url = Config.apiUrl+ '/stream/hot';
        if (!pageno) pageno = 1;
        url += '?pageno='+pageno;

        if (time && sign) {
            url += '&pubtime='+time+'&cate_sign='+sign+'&t='+operation;
        }
        

        console.log(url);
        return $http.get(url).then(function(data) {
            return data.data;
        });
    };

    return {
        getApiData: getApiData
    };
})
.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: '冬芽',
        lastText: 'You on your way?',
        face: 'http://wx.qlogo.cn/mmopen/gtGnxwNxfyJ1EORswEYbldianV76sOPrj9H85Wq8ZyPKmG3Tf5JwoiaFQ0Nib7dsMlI13pmVh9eWgGATKtZxGpVaauVuXQq98Ad/96'
            }, {
                id: 1,
        name: '哈哈',
        lastText: 'Hey, it\'s me',
        face: 'http://imgcdn.lerays.com/vhead/5243fbf2b2119313df7539b666380cd791238d86.jpg?f=c'
    }];

    return {
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});
