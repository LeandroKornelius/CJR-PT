// Objetos 

const relampagoMcQueeen = {
	nome: "Relampago McQueen",
	idade: 47,
	profissao: "Carro de corrida profissional",
	fala: "Catchau",
	catchau() {
		console.log(`Vruum! Ola, eu sou o ${this.nome}, mas imagino que voces ja sabiam. ${this.fala}!`)
	}
}

// console.log(relampagoMcQueeen.nome)
// console.log(relampagoMcQueeen["nome"])

// console.log(relampagoMcQueeen.catchau())

const frutas = []
frutas[0] = 'banana'
frutas[1] = 'maca'
frutas.push('limao')

console.log(frutas.length)
console.log(frutas[2])
console.log(typeof frutas)