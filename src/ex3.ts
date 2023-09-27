//3. Crie uma classe para implementar uma conta corrente. A classe
//deve possuir os seguintes atributos:
//a. Número da conta
//b. Nome do correntista
//c. Saldo
//Os métodos são os seguintes:
//a) Alterar nome
//b) Deposito
//c) Saque
//No construtor, o saldo é opcional, com valor padrão zero e os
//demais atributos são obrigatórios. A conta não pode ficar com saldo
//negativo.


class Conta {
    nome: string;
    saldo: number;
    numeroConta: number;
  
    constructor(nome: string, numeroConta: number, saldo?: number) 
    {
      this.saldo = (saldo && saldo > 0) ? saldo : 0;
      this.nome = nome;
      this.numeroConta = numeroConta;
    }
  
    alterarNome(nome: string) {
      this.nome = nome;
    }
  
    depositar(valor: number) {
      if (valor > 0) {
        this.saldo += valor;
      }
    }
  
    saque(valor: number) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
      }
    }
  }
  
  //executar o exercicio
  export class Exercicio3 {
      constructor() {
        console.log("Exercicio 3");
  
        const conta1 = new Conta("Maria", 123456);
        console.log("conta1", conta1);
        conta1.saque(50);
        console.log("conta1 saque 50", conta1);
        conta1.depositar(50);
        console.log("conta1 deposito 50", conta1);
  
        const conta2 = new Conta("Maria", 123456, 500);
        conta2.alterarNome("João");
        console.log("conta2", conta2);
      }
  }
