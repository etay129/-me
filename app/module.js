var app = angular.module('aboutMe', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: '/pages/page-home.html',
            controller: 'MainCtrl'
        })

        // background
        .when('/background', {
            templateUrl: '/pages/page-background.html',
            controller: 'BackgroundCtrl'
        })

        // work-experience page
        .when('/work-experience', {
            templateUrl: '/pages/page-experience.html',
            controller: 'ExperienceCtrl'
        })

        // projects page
        .when('/projects', {
            templateUrl: '/pages/page-projects.html',
            controller: 'ProjectsCtrl'
        })

        .otherwise('/', {
            templateUrl: 'page-home.html',
            controller: 'MainCtrl'
        });
});
