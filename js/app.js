// * Iniciando o modúlo AngularJS
var app = angular.module("myList", [])

/*
* Aqui temos um controlador que será responsável pelo array.
*/
app.controller("myCtrl",function($scope){
    $scope.area = "Tasks";
    $scope.name = "Gabriel Leandro";
    $scope.listagem = [];
    $scope.hora = {
        value: new Date(200, 0, 1, 14, 57, 0)
    };

    // * Temos um "objeto" que irá ter uma função que ficará responsável pela adição dos itens
    $scope.addItem = function(){
        $scope.errortext = "";
        // Se o addMe estiver vazio, não for verdadeiro retorne false
        if(!$scope.addMe)
        {return}    
        /* 
         * Se no array (indexOf pega o valor dentro de um array)
         * Não contiver o item, adicione.
         */
        if($scope.listagem.indexOf($scope.addMe) == -1){
            $scope.listagem.push($scope.addMe);
            $scope.addMe = "";
        }else{
            $scope.errortext="Esse item já está na lista"
        }
    }

    // Criamos uma função que vai pegar o index do item, no caso!
    // O valor do item, exemplo "Atividades" e remova ao clique
    $scope.removeItem = function(x){
        $scope.listagem.splice(x,1);
    }
})

// Nosso app tá pronto, só vamos estilizar e GG!