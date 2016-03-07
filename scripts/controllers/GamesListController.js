(function (){
    'use strict';

    function GamesListController($location){
        var vm = this;
        //vm.games = function(user, registerForm){
        //    if(registerForm.$valid){
        //        console.log("...Registering User...");
        //        auth.register(user)
        //            .then(function(){
        //                console.log("...User registered...");
        //                $location.path('/');
        //            });
        //    }
        //}
    }

    angular.module('venildaApp.controllers')
        .controller('GamesListController', ['$location', GamesListController]);
}());
