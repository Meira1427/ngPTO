angular.module('ptoModule')
  .factory('ptolistService', function($http) {
    var service = {};
    service = this;
    this.fakeJsonPto = { "data" : [ { "code" : "PTO", "availableHours" : "13.13" }]};
    this.fakeJsonSick = { "data" : [ { "code" : "SICKCO", "availableHours" : "14.14" }]};

        service.getPtoBalanceString = function(empId, compId) {
            return 'https://uatrpotest.proliant.com/CompanyAPI/Company/'.concat(compId, '/Employee/', empId, '/Accrual/PTO');
        }

        service.getSickBalanceString = function(empId, compId) {
            return 'https://uatrpotest.proliant.com/CompanyAPI/Company/'.concat(compId, '/Employee/', empId, '/Accrual/SICKCO');
        }

        service.getFakePtoBalance = function(empId, compId) {
            return this.fakeJsonSick;
        }

        service.getFakeSickBalance = function(empId, compId) {
            return this.fakeJsonPto;
        }

        service.getPtoBalance = function(empId, compId) {
            //console.log('Entering getPtoBalance in PTO List Service');
            var proGetPathPtoString = service.getPtoBalanceString(empId, compId);
            //console.log('PTO Path: ', proGetPathPtoString);
                return $http({
                        method: 'GET',
                        url: proGetPathPtoString,
                            headers : {
                                'Content-Type' : 'application/json',
                                'Authorization' : 'Bearer ${localStorage.getItem("token")}'
                        }
                    })
                    .then(function(data, status){
                        console.log(data);
                    });
            };

        service.getSickBalance = function(empId, compId) {
            //console.log("Entering getSickBalance in PTO List Service");
            var proGetPathSickString = service.getSickBalanceString(empId, compId);
            //console.log("Sick Path: ", proGetPathSickString);
                return $http({
                        method: 'GET',
                        url: proGetPathSickString,
                        headers : {
                        'Content-Type' : 'application/json',
                        'Authorization' : 'Bearer ${localStorage.getItem("token")}'
                        }
                    })
                    .then(function(data, status){
                        console.log(data);
                    });
            };

    return service;

  })
