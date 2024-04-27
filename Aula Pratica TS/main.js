// Problema 1 
var CargoCJR;
(function (CargoCJR) {
    CargoCJR["DIRETOR"] = "diretor";
    CargoCJR["COORDENADOR"] = "coordenador";
    CargoCJR["ASSESSOR"] = "assessor";
})(CargoCJR || (CargoCJR = {}));
// Problema 2
var MembroCJR = /** @class */ (function () {
    function MembroCJR(nome, idade, salario, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.cargo = cargo;
    }
    return MembroCJR;
}());
// Problema 3
var membrosCJR = [
    new MembroCJR('Leo', 21, 0, CargoCJR.DIRETOR),
    new MembroCJR('Vick', 21, 4000, CargoCJR.DIRETOR),
    new MembroCJR('Pedro Fernandes', 28, 3000, CargoCJR.COORDENADOR),
    new MembroCJR('Lima', 35, 4500, CargoCJR.COORDENADOR),
    new MembroCJR('Caue', 32, 3500, CargoCJR.ASSESSOR)
];
// Problema 4
var salarioMembros = function (membros) {
    membros.forEach(function (membroCJR) { return console.log("Nome: ".concat(membroCJR.nome, " - $").concat(membroCJR.salario)); });
};
salarioMembros(membrosCJR);
// Problema 5
function aumentoDez(membros) {
    return membros.map(function (membroCJR) { return membroCJR.salario *= 1.1; });
}
aumentoDez(membrosCJR);
console.log(membrosCJR);
// Problema 6
function filtraPorCargo(membros, cargo) {
    return membros.filter(function (membroCJR) { return membroCJR.cargo === cargo; });
}
console.log(filtraPorCargo(membrosCJR, 'coordenador'));
// Problema 7
var calcularGastoSalarios = function (membros) {
    return membros.reduce(function (total, membro) { return total + membro.salario; }, 0);
};
console.log(calcularGastoSalarios(membrosCJR));
