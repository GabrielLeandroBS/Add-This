// * Iniciando o modúlo AngularJS
var application = angular.module("myList", ["ngStorage"]);

application.controller("myCtrl", function ($scope) {
  // Criar array para adição de objetos
  $scope.array = [];
  // Criamos um evento de clique no HTML chamando essa função
  $scope.addItem = function () {
    // Se o input estiver vazio, retorne falso
    if (!$scope.addItem) return;
    // Pegamos o valor no console log do IndexOf do AddMe
    // AddMe = value do input
    if ($scope.array.indexOf($scope.addMe) === -1) {
      // Adiciona com o push (empurra um novo valor) para o addMe
      $scope.array.push($scope.addMe);
      $scope.save();
      $scope.addMe = "";
    } else {
      alert("Você adicionou a mesma tarefa sem completar ela!");
    }
  };
  // Remover item
  $scope.removeItem = function (x) {
    $scope.array.splice(x, 1);
    $scope.save();
  };

  // Manipulação da data e hora
  $scope.date = {
    value: new Date(2020, 8, 20),
  };

  $scope.hora = {
    value: new Date(00, 00, 00),
  };

  // LocalStorage

  $scope.pageReload = function () {
    var dados = localStorage.getItem("lista");
    $scope.name = localStorage.getItem("Nome")
    if (dados === null) {
      $scope.array = [];
    } else {
      $scope.array = JSON.parse(dados);
    }
  };

  $scope.save = function () {
    localStorage.setItem("lista", JSON.stringify($scope.array));
  };

  $scope.pageReload();
}); 
