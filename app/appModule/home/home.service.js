angular.module('ptoModule')
  .factory('homeService', function($http) {
    var service = {};
    service = this;
    var apiString = 'https://www.readypayonline.com/CompanyAPI/identity/connect/token';
    var testingString = 'https://uatrpotest.proliant.com/CompanyAPI/indentiy/connect/token';
    var jsonBody = {};
    const forHeader1 = user.input1;
    const forHeader2 = user.input2;

        service.tempLoggedIn = function(user) {
            jsonBody.scope = 'company';
            jsonBody.grant_type = 'client_credentials';
            console.log(jsonBody);
            localStorage.setItem('testing', '0035711 testing local storage');
            console.log('Found in Home Local Storage: ', localStorage.getItem('testing'));
            return jsonBody;
        };

        //**** Switch When We Have Proliant Pass****//
        service.getAuthorized = function(user) {
            console.log('Entering getLoggedIn');
            jsonBody.scope = "company";
            jsonBody.grant_type = "client_credentials";
            return $http({
                    method: 'POST',
                    url: testingString,
                    dataType: 'json',
                    headers : {
    						'Content-Type' : 'application/json',
                            'Username' :   this.forHeader1,
                            'Password' : this.forHeader2
    					},
                        data : jsonBody
                })
                .then(function(data, status){
                    localStorage.setItem('token', data.stringify.access_token);
                    console.log(data);
                });
            };

    return service;

  })
