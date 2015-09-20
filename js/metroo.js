var metrooApp = angular.module('metrooApp', ['ngRoute']);

    // configure our routes
    metrooApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            .when('/booking', {
                templateUrl : 'pages/booking.html',
                controller  : 'bookingController'
            })

            .when('/routes', {
                templateUrl : 'pages/routes.html',
                controller  : 'routeController'
            })
            
            .when('/success', {
                templateUrl : 'pages/success.html',
                controller  : 'successController'
            });
    });

    /* create the controller and inject Angular's $scope */
    metrooApp.controller('mainController', function($scope) {
        
    });

    metrooApp.controller('bookingController', function($scope) {
         $('select').material_select();
    });

    metrooApp.controller('routeController', function($scope) {
        $('select').material_select();
    });