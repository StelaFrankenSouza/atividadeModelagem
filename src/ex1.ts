class Contador {
    valor : number
  
    constructor() {
      this.valor = 0
    }
  
    zerar() {
      this.valor = 0
    }
  
    incrementar(incremento: number) {
      this.valor += incremento;
    }
  
    valorAtual() {
      return this.valor
    }
  }
  
  //executar o exercicio
  export class Exercicio1 {
      constructor() {
        console.log("Exercicio 1");
  
        const contador = new Contador();
        console.log("Valor inicial: " + contador.valorAtual());
  
        contador.incrementar(33);
        console.log("Valor: " + contador.valorAtual());
  
        contador.zerar();
        console.log("Valor: " + contador.valorAtual());    
      }
  }
  