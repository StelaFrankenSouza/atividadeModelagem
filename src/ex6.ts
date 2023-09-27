class Carro {
    consumoPorKm: number;
    quantidadeCombustivel: number = 0;
  
    constructor(consumoPorKm: number) {
      this.consumoPorKm = consumoPorKm;
    }
  
    adicionarGasolina(litros: number) {
      this.quantidadeCombustivel += litros;
    }
  
    obterGasolina() {
      return this.quantidadeCombustivel;
    }
  
    andar(distancia: number){
      const litrosGastos = distancia / this.consumoPorKm;
      this.quantidadeCombustivel -= litrosGastos;
    }
  }
  
  //executar o exercicio
  export class Exercicio6 {
      constructor() {
        console.log("Exercicio 6");
  
        const carro = new Carro(10);
        carro.adicionarGasolina(20);
        carro.andar(100)
        console.log(carro.obterGasolina());
  
        console.log(carro);
      }
  }
  