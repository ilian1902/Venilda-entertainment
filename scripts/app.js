(function () {
    'use strict';

    var config = function config($routeProvider, $locationProvider) {
        var CONTROLLER_VIEW_MODEL_NAME = 'vm';

        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home-page-view.html',
                controller: 'HomePageController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/games', {
                templateUrl: 'templates/games-list-view.html',
                controller: 'GamesListController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/app', {
                templateUrl: 'templates/app-view.html',
                controller: 'AppController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/contact', {
                templateUrl: 'templates/contact-view.html',
                controller: 'ContactController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/abouth', {
                templateUrl: 'templates/abouth-view.html',
                controller: 'AbouthController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .otherwise({redirectTo: '/'});
    }

    angular.module('venildaApp.controllers', []);

    angular.module('venildaApp', ['ngRoute', 'venildaApp.controllers'])
        .config(['$routeProvider', '$locationProvider', config]);


}());