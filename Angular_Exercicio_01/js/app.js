let app = angular.module("minhaAplicação",[]);
// Essa estrutura module sempre é necessária para o angular, ela vem com o nome da aplicação mais o colchete

// Agora iremos criar o controller
app.controller('meuController', function($scope){
    // Agora iremos pegar iniciar a variável para a seleção de frutas
    $scope.frutaEscolhida = '';
    //  $scope para compartilhar informação entre os domínios de um controller . 
    
});
