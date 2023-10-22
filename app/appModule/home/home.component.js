angular.module('ptoModule')
	.component('home', {
		templateUrl: 'app/appModule/home/home.component.html',
		controller: function(homeService, $location){
			var vm = this;

			vm.getInputs = function(user) {
				console.log('Entering Function in Home Controller');
				//var getToken = homeService.tempLoggedIn(user);
				//Then switch Path w/out POST
				//$location.path('/ptoList');
				homeService.getAuthorized(user)
				.then(function(response){
					console.log("Ready to change location");
					$location.path('/ptoList')
				})
				.catch(function(error){
					console.log(error);
				});
			}

		},

		controllerAs: 'vm'

	});
