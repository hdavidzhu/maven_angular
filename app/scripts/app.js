'use strict';

/**
 * @ngdoc overview
 * @name mavenAngularApp
 * @description
 * # mavenAngularApp
 *
 * Main module of the application.
 */
angular
  .module('mavenAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/landing', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/', {
        templateUrl: 'views/q_a.html',
        controller: 'ProfileCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/ask', {
        templateUrl: 'views/ask.html',
        controller: 'ProfileCtrl'
      })
      .when('/answer', {
        templateUrl: 'views/answer.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });