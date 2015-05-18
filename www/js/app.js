// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }


        //
        $rootScope.streamlist = [];
    });
})


.constant('ApiEndpoint', {
    url: 'http://localhost:8100/api'
})


.filter('escape', function() {
      return window.encodeURIComponent;

})


.config(function($ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(5);

    $ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
    $ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
    // note that you can also chain configs
    $ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
})


.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://*.lerays.com/**']);

    // The blacklist overrides the whitelist so the open redirect here is blocked.
    $sceDelegateProvider.resourceUrlBlacklist(['http://myapp.example.com/clickThru**']);
})
.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
    })

// Each tab has its own nav history stack:

.state('tab.dash', {
    url: '/dash',
views: {
    'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
controller: 'DashCtrl'
    }
}
})

.state('tab.stream-detail', {
    url: '/stream/:streamId/:streamAck/:streamTitle',
    views: {
        'tab-dash': {
            templateUrl: 'templates/stream-detail.html',
    controller: 'StreamDetailCtrl'
        }
    }
})

.state('tab.feed', {
    url: '/feed',
    views: {
        'tab-feed': {
            templateUrl: 'templates/tab-feed.html',
    controller: 'FeedCtrl'
        }
    }
})

.state('tab.find', {
    url: '/find',
views: {
    'tab-find': {
        templateUrl: 'templates/tab-find.html',
controller: 'FindCtrl'
    }
}
})
.state('tab.find-detail', {
    url: '/find/:chatId',
views: {
    'tab-find': {
        templateUrl: 'templates/chat-detail.html',
controller: 'ChatDetailCtrl'
    }
}
})

.state('tab.account', {
    url: '/account',
views: {
    'tab-account': {
        templateUrl: 'templates/tab-account.html',
controller: 'AccountCtrl'
    }
}
});

// if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/tab/dash');

});
