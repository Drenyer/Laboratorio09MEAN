angular.module("MainApp", []);

function controladorPrincipal($scope, $http) {
    $scope.mascotas = {};
    $scope.newMascota = {};
    $http.get("/api/mascotas").success(function (
        data
    ) {
        $scope.mascotas = data;
        console.log(data);
    }).error(function (data) {
        console.log("Error:" + data);
    });

    $scope.registrarMascota = function () {
        $http.post('/api/mascota', $scope.newMascota)
            .success(function (data) {
                $scope.newMascota = {};
                $scope.mascotas = data;

            })
            .error(function (data) {
                console.log("Error:" + data);
            });
    };


    $scope.selectMascota = function (mascota) {
    
    $scope.newMascota = mascota;
    $scope.selected = true;
    console.log($scope.newMascota, $scope.selected);

    $scope.modificarMascota = function (newArea) {
        $http.put('/api/mascota/' + $scope.newMascota._id, $scope.newMascota)
            .success(function (data) {

                $scope.newMascota = {};
                $scope.mascotas = data;
                $scope.selected = false;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    

    $scope.borrarMascota = function( newMascota ) {
        $http.delete( '/api/area/' + $scope.newMascota._id) .success(function(data) {
            $scope.newMascota = {}; $scope.mascotas = data;
            $scope.selected = false;
    })
        .error(function(data) {
            console.log('Error:' + data);
        });
    };
}
};
