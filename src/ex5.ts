class BombaCombustivel {
    tipoCombustivel: string = "";
    quantidadeCombustivel: number = 0;
    valorLitro: number = 0;
  
    alterarCombustivel(tipoCombustivel: string) {
      this.tipoCombustivel = tipoCombustivel;
    }
  
    alterarQuantidadeCombustivel(quantidadeCombustivel: number) {
      this.quantidadeCombustivel = quantidadeCombustivel;
    }
  
    alterarValor(valorLitro: number) {
      this.valorLitro = valorLitro;
    }
  
    abastecerPorLitro(litros: number) {
      if(this.quantidadeCombustivel >= litros){
        this.quantidadeCombustivel -= litros;
        let valorFinal = litros * this.valorLitro;
        console.log("Valor do abastecimento: " + valorFinal.toFixed(2));
      }
      else{
        console.log("Não existe combustível suficiente");
      }
    }
  
    abastecerPorValor(valor: number) {
      const litros = valor / this.valorLitro;
      this.abastecerPorLitro(litros);
    }
  }
  
  //executar o exercicio
  export class Exercicio5 {
      constructor() {
        console.log("Exercicio 5");
  
        const bomba = new BombaCombustivel();
        bomba.alterarCombustivel("gasolina");
        bomba.alterarQuantidadeCombustivel(1000);
        bomba.alterarValor(5.50);
  
        bomba.abastecerPorLitro(2000);
        bomba.abastecerPorLitro(20);
  
        bomba.abastecerPorValor(10000);
        bomba.abastecerPorValor(100);
        console.log(bomba);
      }
  }
  