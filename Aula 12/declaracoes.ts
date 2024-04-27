// tipagem por inferencia
let number = 10;

// explicitar tipo
let num: number;
num = 6;

interface Funcionario {
    id: number;
    nome: string;
    salario: number;

    mostraSalario(): string
}

class Programador implements Funcionario {
    constructor(id: number, nome: string, salario: number) {}
    id: number;
    nome: string;
    salario: number;
    mostraSalario(): string {
        return `Programador ${this.nome} recebe: ${this.salario}`
    }
}

let trainee: Funcionario = new Programador(1, "Focation", 35000)
console.log(trainee.mostraSalario())
