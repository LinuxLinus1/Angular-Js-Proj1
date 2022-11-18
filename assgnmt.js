var app = angular.module("angApp",[]);

app.controller("angController", function ($scope, $http){

  $http.get("./Stuffs.json").then(function(response){
      $scope.stuffs = response.data;
  }).catch(err => console.error(err));
    

  $scope.img = "./my logo.png";
  $scope.bodyObj = {
    padding:0,
    margin:0,
    backgroundColor: '#eef'
  };
  $scope.div = {
    display: "flex",
    paddingBlock: "20px",
    backgroundColor: "black",
    justifyContent: "space-evenly",
  };
  $scope.links = ["Home", "About", "Services", "Contact", "Login"];
  $scope.td = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize:"1.2em",
    Cursor: "pointer"
  };
  $scope.btn = {
    display: 'block',
    width:'fit-content',
    marginInline:'auto',
    paddingBlock : '20px',
    paddingInline : '10px',
    textDecoration : 'none',
    color:'white',
    backgroundColor : 'black',
    borderRadius : '20px',
    fontWeight: 'bold'
    }
  $scope.inp = {
    display: 'block',
    width:'fit-content',
    marginInline:'auto',
    paddingBlock : '12px',
    paddingInline : '60px',
    borderRadius : '5px',
    fontWeight: 'bold',
    fontSize: '1.1em'
  }

  $scope.brand = {
    color: 'black',
    fontSize: '1.5em',
    fontWeight: 'bold',
  }

  $scope.price = {
    color: 'blue',
    fontSize: '1.2em',
    fontWeight: 'bold'
  }

  $scope.imagee = {
    width: '500px',
    borderRadius: '12px',
    boxShadow: '3px 3px 5px gray',
  }

  $scope.contain ={
    margin: '0 20px'
  }

  $scope.contains ={
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px 0 25px 30px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4,4fr)',
  }

  $scope.toggle = function(){
      if($scope.choice == true){
        $scope.choice = false
      }
      else{
        $scope.choice = true
      }
    }
   
})