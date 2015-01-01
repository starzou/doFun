/**
 * @class app
 * @description funApp 应用
 * @time 2015-01-01 17:13
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    /**
     * 定义 funApp 应用
     */
    var funApp = angular.module('funApp', ['ionic', 'funApp.controllers', 'funApp.services']);


    /**
     * 配置平台
     */
    funApp.run(['$ionicPlatform', function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }]);


    /**
     * 配置路由
     */
    funApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tab', {
                url        : "/tab",
                abstract   : true,
                templateUrl: "templates/tabs.html"
            })

            .state('tab.dash', {
                url  : '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller : 'DashCtrl'
                    }
                }
            })

            .state('tab.chats', {
                url  : '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller : 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url  : '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chat-detail.html',
                        controller : 'ChatDetailCtrl'
                    }
                }
            })

            .state('tab.friends', {
                url  : '/friends',
                views: {
                    'tab-friends': {
                        templateUrl: 'templates/tab-friends.html',
                        controller : 'FriendsCtrl'
                    }
                }
            })
            .state('tab.friend-detail', {
                url  : '/friend/:friendId',
                views: {
                    'tab-friends': {
                        templateUrl: 'templates/friend-detail.html',
                        controller : 'FriendDetailCtrl'
                    }
                }
            })

            .state('tab.account', {
                url  : '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller : 'AccountCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/tab/dash');
    }]);


})(window, document);



