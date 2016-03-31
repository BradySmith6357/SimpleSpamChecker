angular.module("mainApp", []);

angular.module("mainApp")
	.controller("mainTroller", ["$scope", function($scope){

		$scope.randomCode = ""

		$scope.words = [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z"	
		]

		$scope.generateCode = function(){
			$scope.success = false
			$scope.fail = false
			var numOne = Math.floor((Math.random() * 10) + 1)
			var numTwo = Math.floor((Math.random() * 10) + 1)
			var numThree = Math.floor((Math.random() * 10) + 1)
			var numFour = Math.floor((Math.random() * 10) + 1)
			var randWord = Math.floor((Math.random() * $scope.words.length))
			var wordOne = $scope.words[randWord]
			var randWord = Math.floor((Math.random() * $scope.words.length))
			var wordTwo = $scope.words[randWord]
			var randWord = Math.floor((Math.random() * $scope.words.length))
			var wordThree = $scope.words[randWord]
			$scope.randomCode = numOne + wordOne + numTwo + wordTwo + numThree + wordThree + numFour
			$scope.randomCode = _.toArray($scope.randomCode)
			$scope.randomCode = _.shuffle($scope.randomCode)
			$scope.randomCode = $scope.randomCode.toString().replace(/,/g,"")
		}

		$scope.checkCode = function(){
			$scope.success = false
			$scope.fail = false
			$scope.inputCode = $scope.inputCode.toLowerCase()
			console.log($scope.inputCode)
			if($scope.randomCode == $scope.inputCode){
				$scope.success = true
			} else {
				$scope.fail = true
			}
		$scope.inputCode = ""
		$scope.randomCode = ""
		}

// ****** Using Images **********

		$scope.images = [
			{
				img: "https://img1.etsystatic.com/063/0/10054863/il_fullxfull.760639189_i6jg.jpg",
				answer: "9296"
			},
			{
				img: "https://img0.etsystatic.com/025/0/6328095/il_fullxfull.602693560_diuj.jpg",
				answer: "440"
			},
			{
				img: "http://img2-1.timeinc.net/toh/i/g/14/products/01-house-numbers/02-house-number.jpg",
				answer: "701"
			}
		]

		$scope.randomImg = {}

		$scope.genImage = function(){
			$scope.randomIndex = Math.floor((Math.random() * $scope.images.length))
			$scope.randomImg = $scope.images[$scope.randomIndex]
			console.log($scope.randomImg)
		}

		$scope.checkImg = function(){
			$scope.success2 = false
			$scope.fail2 = false
			if($scope.randomImg.answer == $scope.imgAnswer) {
				$scope.success2 = true
			} else {
				$scope.fail2 = true
			}
		}

		}])