/*2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor*/

class Bola{
    cor: string;
    circunferencia: number;
    material: string;

    constructor(cor: string, circunferencia: number, material: string){
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }

    trocarCor(novaCor: string){
        this.cor = novaCor
    }

    mostrarCor(){
        return this.cor
    }
}

export class Exercicio2 {
    constructor() {
      console.log("Exercicio 2");

      const bola = new Bola("rosa", 30, "couro");
      console.log("Cor: " + bola.mostrarCor());

        bola.trocarCor("verde");
      console.log(bola.trocarCor("verde"));
       
    
        
    }
}