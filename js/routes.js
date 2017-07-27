angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.sparaPay', {
    url: '/pay',
    views: {
      'tab3': {
        templateUrl: 'templates/sparaPay.html',
        controller: 'sparaPayCtrl'
      }
    }
  })

  .state('tabsController.contacts', {
    url: '/page6',
    views: {
      'tab4': {
        templateUrl: 'templates/contacts.html',
        controller: 'contactsCtrl'
      }
    }
  })

  .state('tabsController.success', {
    url: '/success',
    views: {
      'tab3': {
        templateUrl: 'templates/success.html',
        controller: 'successCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page6')


});