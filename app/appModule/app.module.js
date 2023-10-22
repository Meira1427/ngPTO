angular.module('ptoModule', ['ngRoute', 'ngCookies'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		template: '<home></home>'
	})
	.when('/home', {
		template: '<home></home>'
	})
	.when('/ptoList', {
		template: '<ptolist></ptolist>'
	})
	.when('/clear', {
		template: '<clear></clear>'
	})
	.otherwise({
		template: '<h1>404-Not Found</h1>'
	})
});
