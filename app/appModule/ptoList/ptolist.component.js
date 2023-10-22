angular.module('ptoModule')
	.component('ptolist', {
		templateUrl: 'app/appModule/ptoList/ptolist.component.html',
		controller: function(ptolistService, $location){
			var vm = this;

			vm.list = [];

			vm.emplKeys = {
				1018 : {
					Name : "MichelleA",
					Type : "llc",
					PtoBalance : "part time",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1014 : {
					Name : "AmyB",
					Type : "llc",
					PtoBalance : "part time",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1026 : {
					Name : "MandyC",
					Type : "llc",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1011 : {
					Name : "JamieD",
					Type : "llc",
					PtoBalance : "part time",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1019 : {
					Name : "CaitlynD",
					Type : "llc",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1010 : {
					Name : "AllisonF",
					Type : "llc",
					PtoBalance : "part time",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1001 : {
					Name : "RacquelG",
					Type : "both",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "waiting",
					SickBalance2 : "waiting",
				},
				1002 : {
					Name : "MackenzieG",
					Type : "llc",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1006 : {
					Name : "ChrisG",
					Type : "llc",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1007 : {
					Name : "JaydenG",
					Type : "llc",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1025 : {
					Name : "LisaG",
					Type : "both",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "waiting",
					SickBalance2 : "waiting"
				},
				1015 : {
					Name : "GarrettJ",
					Type : "llc",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1023 : {
					Name : "DanielleK",
					Type : "llc",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1024 : {
					Name : "KimberlyK",
					Type : "both",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "waiting",
					SickBalance2 : "waiting"
				},
				1020 : {
					Name : "JoseL",
					Type : "llc",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1003 : {
					Name : "SabrynaN",
					Type : "llc",
					PtoBalance : "part time",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1008 : {
					Name : "JeremyP",
					Type : "both",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "waiting",
					SickBalance2 : "waiting"
				},
				1012 : {
					Name : "KristaR",
					Type : "llc",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1021 : {
					Name : "GailT",
					Type : "llc",
					PtoBalance : "part time",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1009 : {
					Name : "JeanU",
					Type : "llc",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1022 : {
					Name : "AmyW",
					Type : "llc",
					PtoBalance : "part time",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1028 : {
					Name : "CortnieW",
					Type : "both",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "waiting",
					SickBalance2 : "waiting"
				},
				1005 : {
					Name : "PresciliaW",
					Type : "llc",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				9913 : {
					Name : "SaraD",
					Type : "npo",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				9910 : {
					Name : "NathanH",
					Type : "npo",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				9902 : {
					Name : "TiffanyK",
					Type : "npo",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1017 : {
					Name : "IndigoP",
					Type : "npo",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				1016 : {
					Name : "SavannahP",
					Type : "npo",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				9904 : {
					Name : "FrankieR",
					Type : "npo",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				},
				9906 : {
					Name : "TammyW",
					Type : "npo",
					PtoBalance : "waiting",
					SickBalance : "waiting",
					PtoBalance2 : "not appl",
					SickBalance2 : "not appl"
				}
			}

			vm.fakePtoData1026 = {
			    "data" : [
			      {
			        "code" : "PTO",
			        "availableHours" : "17.45",
			        "availableAmount": "0",
			        "probationHours": "0",
			        "probationDollars": "0"
			    }
			    ],
			        "errors": [
			            "string"
			        ],
			        "messages": [
			            "string"
			        ],
			        "warnings": [
			            "string"
			        ],
			        "validationErrors": [
			            "string"
			        ],
			        "metadata": {}
			    };

			    vm.fakeSickData1026 = {
			        "data": [
			          {
			            "code": "SICKCO",
			            "availableHours": "12.12",
			            "availableAmount": "0",
			            "probationHours": "0",
			            "probationDollars": "0"
			        }
			        ],
			            "errors": [
			                "string"
			            ],
			            "messages": [
			                "string"
			            ],
			            "warnings": [
			                "string"
			            ],
			            "validationErrors": [
			                "string"
			            ],
			            "metadata": {}
			        };

			vm.getBalances = function(){
				//console.log("Entering getBalances() and printing Object.");
				//console.log(vm.emplKeys);
				if(vm.emplKeys != null){
					var iterKeys = Object.keys(vm.emplKeys);
					iterKeys.forEach(function(number, index, array) {
						var currentId = iterKeys[index];
						updateEmployeeBalances(currentId);
					});
				};
				//console.log(vm.emplKeys);
				//console.log("Building Array");
				vm.buildVmList(vm.emplKeys);
			}

			//vm.getBalances();

			vm.buildVmList = function (emplObj) {
				//console.log("Entering Build Vm List and Printing Object.");
				//console.log(emplObj);
				if(emplObj != null){
					var iterValues = Object.values(emplObj);
					iterValues.forEach(function(current, index, array) {
						//console.log("Pushing to VM List: ", current);
						vm.list.push(current);
					});
				};
				//console.log("Printing After Building VM List.");
				//console.log(vm.list);
				return vm.list;
			}

			var isBothLlcNpo = function(employeeId) {
			    return vm.emplKeys.employeeId.Type == "both";
			}

			var isLlcOnly = function(employeeId) {
			    return vm.emplKeys.employeeId.Type == "llc";
			}

			var updateEmployeeBalances = function(empId) {
				//console.log("entering updateEmployeeBalances in PTO controller.");
				console.log("Found in PTO Controller: ", localStorage.getItem("testing"));
				var jsonPtoLlc = {};
				var ptoDataLlc = {};
				var jsonSickLlc = {};
				var sickDataLlc = {};
				var jsonPtoNpo = {};
				var ptoDataNpo = {};
				var jsonSickNpo = {};
				var sickDataNpo = {};
			    if (isBothLlcNpo) {
			        jsonPtoLlc = getPtoJsonFromProliant(empId, "AZ3053");
			        ptoDataLlc = jsonPtoLlc.data[0];
			        jsonSickLlc = getSickBalanceJsonFromProliant (empId, "AZ3053");
			        sickDataLlc = jsonSickLlc.data[0];
			        jsonPtoNpo = getPtoJsonFromProliant(empId, "AZ3054");
			        ptoDataNpo = jsonPtoNpo.data[0];
			        jsonSickNpo = getSickBalanceJsonFromProliant(empId, "AZ3054");
			        sickDataNpo = jsonSickNpo.data[0];
					vm.emplKeys[empId].SickBalance = sickDataLlc.availableHours;
					if(vm.emplKeys[empId].PtoBalance != "part time") {
						vm.emplKeys[empId].PtoBalance = ptoDataLlc.availableHours;
					}
					if(vm.emplKeys[empId].PtoBalance2 != "not appl") {
						vm.emplKeys[empId].PtoBalance2 = ptoDataNpo.availableHours;
					}
			        if(vm.emplKeys[empId].SickBalance2 != "not appl"){
						vm.emplKeys[empId].SickBalance2 = sickDataNpo.availableHours;
					}
			    }
			    else if (isLlcOnly) {
			        jsonPtoLlc = getPtoJsonFromProliant(empId, "AZ3053");
			        ptoDataLlc = jsonPtoLlc.data[0];
			        jsonSickLlc = getSickBalanceJsonFromProliant (empId, "AZ3053");
			        sickDataLlc = jsonSickLlc.data[0];
					if(vm.emplKeys[empId].PtoBalance != "part time") {
						vm.emplKeys[empId].PtoBalance = ptoDataLlc.availableHours;
					}
			        vm.emplKeys[empId].SickBalance = sickDataLlc.availableHours;
			    }
			    else {
			        jsonPtoNpo = getPtoJsonFromProliant(empId, "AZ3054");
			        ptoDataNpo = jsonPtoNpo.data[0];
			        jsonSickNpo = getSickBalanceJsonFromProliant(empId, "AZ3054");
			        sickDataNpo = jsonSickNpo.data[0];
					if(vm.emplKeys[empId].PtoBalance != "part time") {
						vm.emplKeys[empId].PtoBalance = ptoDataLlc.availableHours;
					}
			        vm.emplKeys[empId].SickBalance = sickDataNpo.availableHours;
			    }
				// console.log(vm.emplKeys);
				return vm.emplKeys;
			}

			var getPtoJsonFromProliant = function(empId, compId) {
				//Note Here, check type returned. If you get back JSON, use
				//JSON.parse. If you get back an object, just return it. It depends
				//upon the API Server.
				//console.log("Entering getPtoJasonFromProliant");
				var answer = ptolistService.getPtoBalance(empId, compId);
				//console.log(answer);
				if(answer != null) {
					if(typeof answer == 'object') {
						//console.log("Typeof Returned from API ", typeof answer);
						//return answer;
					}
					else {
						//console.log("Typeof Returned from API ", typeof answer);
				    	//return (JSON.parse(answer));
					}
				}
				//return answer; //If answer is null, still need to return something
			    return vm.fakePtoData1026;
			}

			var getSickBalanceJsonFromProliant = function(empId, compId) {
				//Note Here, check type returned. If you get back JSON, use
				//JSON.parse. If you get back an object, just return it. It depends
				//upon the API Server.
				var answer = ptolistService.getSickBalance(empId, compId);
				if (answer != null) {
					if(typeof answer == 'object') {
						//console.log("Typeof Returned from API: ", typeof answer);
						//return answer;
					}
					else {
						//console.log("Typeof Returned from API: ", typeof answer);
				    	//return (JSON.parse(answer));
					}
				}
				//return answer; //If answer is null, still need to return something
			    return vm.fakeSickData1026;
			}

			vm.destroyToken = function() {
				localStorage.removeItem('token');
				console.log('Value deleted? = ', localStorage.getItem('token')==undefined);
				$location.path('/clear');
			}

		},

		controllerAs: 'vm'

	});
