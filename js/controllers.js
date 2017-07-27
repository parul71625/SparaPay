angular.module('app.controllers', [])
     
.controller('sparaPayCtrl', ['$scope', '$stateParams', '$http', '$ionicTabsDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicTabsDelegate) {
    $scope.response = "";
    $scope.finalAmt = "";
    $scope.enterNumber = function(val) {
        var curr = document.getElementById("amount").value;
        if((val == "." && curr.includes(val)) || (val == "." && !curr)) { }
        else {
            document.getElementById("amount").value = curr+val;
            $scope.finalAmt = curr+val;
        }
    };

    $scope.clearInput = function() {
        document.getElementById("amount").value = "";
        document.getElementById("cbox").value = "";
    };
    
    $scope.switchToContacts = function() {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
            $ionicTabsDelegate.select(selected + 1);
        }
    };

    var updateInputData = function(amt) {
        var jsonData = {
				"intent": "sale",
				"payer": {
					"payment_method": "credit_card",
					"funding_instruments": [{
						"credit_card": {
							"number": "1234567891245455",
							"type": "visa",
							"expire_month": "04",
							"expire_year": "2028",
							"cvv": "341",
							"first_name": "Parul",
							"last_name": "Priya",
							"billing_address": {
								"line1": "1119 W. 29th Street",
								"city": "Los Angeles",
								"state": "CA",
								"postal_code": "90007",
								"country_code": "US"
							}
						}
					}]
				},

				"amount": amt,
				"currency": "USD",
				"description": "The payment transaction description."
			}

			return jsonData;
    };

    $scope.activatePay = function() {
        if($scope.finalAmt) {
            $scope.jsonData = updateInputData($scope.finalAmt);
            $http.post('http://18f69aa9.ngrok.io',$scope.jsonData)
    			.then(function successCallback(data, status, headers, config) {
    				$scope.response = JSON.stringify(data);
    				// alert(JSON.stringify(data));
    			}, function errorCallback(data) {
    				$scope.response = data;
    			});
        }
    }

}])
   
.controller('contactsCtrl', ['$scope', '$stateParams', '$ionicTabsDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicTabsDelegate) {
    $scope.contacts = [
        {
        "name": "alpha",
        "phno": "2134567890"
        },
        {
        "name": "beta",
        "phno": "2134457890"
        },
        {
        "name": "gama",
        "phno": "2189567890"
        }
        ];
        
        $scope.addContact = function (name) {
            var box = document.getElementById("cbox");
            document.getElementById("cbox").value = name;
            var selected = $ionicTabsDelegate.selectedIndex();
            if (selected !== -1 && selected !== 0) {
                $ionicTabsDelegate.select(selected - 1);
            }
        };

}])
   
.controller('successCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 