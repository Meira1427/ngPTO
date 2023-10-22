angular.module('ptoModule')
	.component('clear', {
		templateUrl: 'app/appModule/clear/clear.component.html',
		controller: function($location){
			var vm = this;

			vm.startOver = function(user) {
				console.log("Starting Over");
				$location.path('/home');
			}

		},

		controllerAs: 'vm'

	});
