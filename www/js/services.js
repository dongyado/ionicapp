angular.module('starter.services', [])

// config 
.factory('Config', function(ApiEndpoint) {
    var api = 'http://app.lerays.com/api/';

    api = ApiEndpoint.url;
    return {
        // baseUrl: 'http://localhost:3000',
        apiUrl: api

    };
})

//--------------------------------------
.factory('Tags', function($http, Config){
    var tags = [];

    var url = Config.apiUrl + '/stream/category/navi';

    return {
        getTags: function(){
            return $http.get(url).then(function(res){
                for(var i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i].is_delete == false) 
                    {
                        tags.push(res.data.data[i]);
                    }
                }
                return tags;
            }, function(res) {
                return tags;
            });    
        }
    } 
})

//----------------------------------------
/**
 * streams list service
 *
 * */
.factory('Streams', function($http, Config, $q, $rootScope) 
{
    var streams = [];
    var streamService = {};
    var params = {};
    
    streamService.getList = function(pageno, time, sign, operation) {

        var url = Config.apiUrl+ '/stream/hot';
        
        if (!pageno) pageno = 1;
        url += '?pageno='+pageno;

        if (time && sign) 
        {
            url += '&pubtime=' + time + '&cate_sign=' + sign + '&t='+ operation;
        }
        

        return $http.get(url).then(function(res) {
            for(var i = 0; i < res.data.data.list.length; i++)
            {
                streams.push(res.data.data.list[i]);    
            }

            params.pageno   = res.data.data.pageno;
            params.nexttime = res.data.data.nexttime;
            params.nextsign = res.data.data.nextsign;
            params.prevtime = res.data.data.prevtime;
            params.prevsign = res.data.data.prevsign;

            return streams;
        },function(res){
            return streams;
        });
    };

    streamService.loadMore = function(){
        return streamService.getList(params.pageno +1, params.nexttime, params.nextsign, 'n');
    }

    return streamService;
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
