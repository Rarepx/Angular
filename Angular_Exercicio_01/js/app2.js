let app = angular.module('minhaAplicação', []);

app.controller('meuController', function($scope) {
  $scope.frutas = ["Abacaxi", "Maçã", "Pera", "Laranja"];
  $scope.mensagem = 'A Fruta Selecionada foi: ';

  $scope.$watch('frutaEscolhida', function(frutaEscolhida, frutaAnterior) {
    //$watch é chamada com os novos e antigos valores de ‘selecionarFruta’. 
    //Essa é a razão pela qual a função de retorno de chamada recebe como parâmetros frutaSelecionada e frutaAnterior, 
    //representando o novo valor e o valor anterior da expressão observada.
    
    if (frutaEscolhida !== frutaAnterior) {
      $scope.exibirFruta = true;
      $scope.fruta = frutaEscolhida;

        if(frutaEscolhida == "Abacaxi"){
            //injeção de html, nova estrutura para adicionar uma imagem
            limparCampoImagem();
            angular.element(document.getElementById('imagemFruta')).append('<img src="img/abacaxi.jpg" width="600" height="600">');
        }
        if(frutaEscolhida == "Maçã"){
            limparCampoImagem();
            angular.element(document.getElementById('imagemFruta')).append('<img src="img/maçã.jpg" width="600" height="600">');
        }
        if(frutaEscolhida == "Pera"){
            limparCampoImagem();
            angular.element(document.getElementById('imagemFruta')).append('<img src="img/pera.jpg" width="600" height="600">');
        }
        if(frutaEscolhida == "Laranja"){
            limparCampoImagem();
            angular.element(document.getElementById('imagemFruta')).append('<img src="img/laranja.jpg" width="600" height="600">');
        }
        }

    
  });
  function limparCampoImagem(){
    document.getElementById('imagemFruta').innerText = '';
  }
  
});

