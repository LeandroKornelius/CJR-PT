// Problema 1 

enum CargoCJR {
    DIRETOR = 'diretor',
    COORDENADOR = 'coordenador',
    ASSESSOR = 'assessor'
}

interface Membro {
    nome: string;
    idade: number;
    salario: number;
    cargo: CargoCJR;
}

// Problema 2

class MembroCJR implements Membro {
    constructor(
        public nome: string,
        public idade: number,
        public salario: number,
        public cargo: CargoCJR
    ) {}
}

// Problema 3

const membrosCJR: MembroCJR[] = [
    new MembroCJR('Leo', 21, 0, CargoCJR.DIRETOR),
    new MembroCJR('Vick', 21, 4000, CargoCJR.DIRETOR),
    new MembroCJR('Pedro Fernandes', 28, 3000, CargoCJR.COORDENADOR),
    new MembroCJR('Lima', 35, 4500, CargoCJR.COORDENADOR),
    new MembroCJR('Caue', 32, 3500, CargoCJR.ASSESSOR)
];

// Problema 4

const salarioMembros = (membros: Membro[]): void => {
    membros.forEach(membroCJR => console.log(`Nome: ${membroCJR.nome} - $${membroCJR.salario}`))
}

salarioMembros(membrosCJR)

// Problema 5

function aumentoDez(membros: Membro[]) {
    return membros.map(membroCJR => membroCJR.salario *= 1.1)
}

aumentoDez(membrosCJR)
console.log(membrosCJR)

// Problema 6

function filtraPorCargo(membros: Membro[], cargo: string) {
    return membros.filter(membroCJR => membroCJR.cargo === cargo)
}

console.log(filtraPorCargo(membrosCJR, 'coordenador'))

// Problema 7

const calcularGastoSalarios = (membros: Membro[]): number =>
    membros.reduce((total, membro) => total + membro.salario, 0);
  
  console.log(calcularGastoSalarios(membrosCJR));
  
