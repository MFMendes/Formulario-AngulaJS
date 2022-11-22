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

    $scope.desenvolvedores = [
        {
            Nome: "Marcelo",
            Idade: 23,
            Nível: "Júnior"
        },
        {
            Nome: "Marcos",
            Idade: 20,
            Nível: "Júnior"
        }
    ];

    $scope.verificaCampoObrigatorio = function(nomeCampo, idSpanAlerta) {
        let spanAvisoCampoObrigatorio = document.querySelector(idSpanAlerta);

        if (nomeCampo == null) {
            spanAvisoCampoObrigatorio.innerHTML = `
                <span class="text-danger">
                    <i class="bi bi-exclamation-circle"></i>
                    Campo obrigatório.
                </span>
            `;
        } else {
            spanAvisoCampoObrigatorio.innerHTML = '';
        }
    }
})