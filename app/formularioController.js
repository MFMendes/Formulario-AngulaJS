var formularioApp = angular.module('formularioApp', [])

formularioApp.controller('FormularioController', function($scope) {
   
    $scope.enviaFormulario = function() {
        if ($scope.cadastroForm.$valid) {
            $('.alert').removeClass('d-none');
            $scope.class = "success";
            $scope.texto = "Formulário enviado com sucesso!";
        } else {
            $('.alert').removeClass('d-none');
            $scope.class = "danger";
            $scope.texto = "Preencha todos os campos obrigatórios!";
        }
    };
})