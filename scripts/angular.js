	var app = angular.module("myApp", []);
	app.controller("myCtrl", function($scope) {
	  $scope.elements = [
	  	{code: "3002", x: "724", y: "192", class: "sold", coords_on_click: "820,240,936,274"},
	  	{code: "2902", x: "724", y: "234", class: "", coords_on_click: "820,286,936,317"},
	  	{code: "2802", x: "724", y: "282", class: "", coords_on_click: "820,326,936,356"},
	  ];
	});

