var app = angular.module("myApp", ['ngAnimate']); 

app.controller("TimeCtrl", function($scope, $timeout) {				//Time component

var TimeCtrl = function() {
    $scope.clock = "loading clock..."; // initialise the time variable
    $scope.tickInterval = 1000 //ms

var tick = function( ){
       $scope.clock = Date.now(); 
       $timeout(tick, $scope.tickInterval);
}
   
    $timeout(tick, $scope.tickInterval);
}

TimeCtrl();

});

app.controller('weatherCtrl',function($scope,$http){		//Weather Component
	var vm = $scope;
	var apiKey = "";	//use your api keys here	
	var apiKey2 = "";	//alternate api key
	/*alternate api key = */
	//var openWeatherUrl ="http://api.openweathermap.org/data/2.5/forecast/city?id=1278149&APPID="+ apiKey1;
	var openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?id=1278149&APPID="+apiKey;


	$http.get(openWeatherUrl).success(function(data){

		vm.description =data.weather[0].description ;
		vm.city = data.name + ", " + data.sys.country;
		vm.mintemp = ((data.main.temp_min) - 273.15).toFixed(0);
		vm.maxtemp = ((data.main.temp_max) - 273.15).toFixed(0);
		vm.temp = ((data.main.temp) - 273.15).toFixed(0);
		vm.pic = data.weather[0].icon;
		vm.picsrc = "http://openweathermap.org/img/w/"+ vm.pic +".png"
		});

		
});

app.controller('PanelController', function(){		//Panel tabs controller
			this.tab = 1;
			this.selectTab = function(setTab){
				this.tab = setTab;
			};
			this.isSelected = function(checkTab){
				return this.tab === checkTab;
			};
			
		});
app.controller('mapCtrl',function(){
	 $scope.initialize = function() {
          var map = new google.maps.Map(document.getElementById('map'), {
             center: {lat: -34.397, lng: 150.644},
             zoom: 8
          });
       }    
       
       google.maps.event.addDomListener(window, 'load', $scope.initialize);   

});
