let app = angular.module('minhaAplicacao',[]);

app.controller('meuController', function ($scope){
    //inicializar array
    $scope.produtos = [];
    //inicializar o objeto
    $scope.novoPoduto= {};
    

    $scope.adicionarProduto = function(){
        $scope.produtos.push({
            //para adicionar um novo objeto precisamos passar as 3 variáveis
            nome : $scope.novoPoduto.nome,
            preco : $scope.novoPoduto.preco,
            categoria : $scope.novoPoduto.categoria
        })

    };

    $scope.filtroProduto = function(){
        $scope.produtosFiltrados = $scope.produtos.filter(function(){
            return(!($scope.filtroNome) || produto.nome.toLowerCase().includes($scope.filtronome.toLowerCase())) &&
            (!($scope.filtroCategoria) || produto.categoria.toLowerCase().includes($scope.filtroCategoria.toLowerCase()))

        })
    };


})