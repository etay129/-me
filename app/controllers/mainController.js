app.controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout){
  var ctrl = this;

  //$scope.hideEmail = true;
  //$scope.hideIg = true;
  //$scope.hideGit = true;
  //$scope.emailInactive = false;
  //$scope.igInactive = false;
  //$scope.gitInactive = false;

  ctrl.icons = [
    {
      type: "email",
      image: "/images/email.png",
      display: "etay@alumni.ubc.ca",
      inactive: false,
      hide: true,
    },
    {
      type: "ig",
      image: "/images/instagram.png",
      display: "@evangelinetay",
      inactive: false,
      hide: true,
    },
    {
      type: "git",
      image: "/images/github.png",
      display: "github.com/etay129",
      inactive: false,
      hide: true,
    },
  ]
  
  ctrl.log = function() {
    console.log("hello");
    console.log(ctrl.icons);
  }

  ctrl.toggle = function(type) {
    console.log(type);
    switch(type) {
      case 'email':
        $scope.icons[0].hide = !$scope.icons[0].hide;
        console.log($scope.icons[0]);
        console.log($scope.icons[0].hide);
        $scope.icons[1].hide = true;
        $scope.icons[2].hide = true;
        break;
      case 'ig':
        $scope.icons[1].hide = !$scope.icons[1].hide;
        $scope.icons[0].hide = true;
        $scope.icons[2].hide = true;
        break;
      case 'git':
        $scope.icons[2].hide = !$scope.icons[0].hide;
        $scope.icons[0].hide = true;
        $scope.icons[1].hide = true;
        break;
    }
  }

  ctrl.hover = function(type) {
    var elements = document.getElementsByClassName('social-media-img');

    switch(type) {
      case 'email':
      $scope.icons[1].inactive = true;
      $scope.icons[2].inactive = true;
      break;

      case 'ig':
      $scope.icons[1].inactive = true;
      $scope.icons[2].inactive = true;
      break;

      case 'git':
      $scope.icons[0].inactive = true;
      $scope.icons[1].inactive = true;
      break;
    }
  }

  ctrl.clearHover = function() {
    var elements = document.getElementsByClassName('inactive');

    $scope.icons[0].inactive = true;
    $scope.icons[1].inactive = true;
    $scope.icons[2].inactive = true;

  }
}])
