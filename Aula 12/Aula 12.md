# TypeScript

> É ele, o iluminado do Bellingham! 
Mas pode chamá-lo de Typescript!
Pois é, galera! Chegamos nele, depois de tantas aulas de JS entramos no TypeScript! 
Como conversado no início de nossas aulas, vamos abordar as funcionalidades que o TS traz para a gente e suas vantagens!
Pega a visão e simboraaa!
Aulas → Aula 12
> 

## Conteúdo da Aula

### Contextualização

Como vimos no JS temos tipos, porém as variáveis não são tipadas, ou seja, não tem um tipo definido para serem armazenadas nelas. 
O TS introduz uma funcionalidade no JS, verificando se, ao atribuir um valor em variável, o valor é compatível com o tipo da declaração.

`Vantagem` → Reduz a chance de bugs uma vez que não podemos inserir um valor incoerente com o declarado, o que com certeza será usado em outros momentos.

### Definição de tipos

Ocorre por meio de uma declaração ou o TS é capaz de inferir o tipo das variáveis

```typescript
// Inferencia -> TS por meio do valor armazenado infere que o tipo da variavel e number
let myNumber = 10;
let yourNumber: number; // Explicitamos o tipo da variavel como number
yourNumber = 11;
``` 

Obs → Em orientação a objetos temos o conceito de interfaces que definem propriedades e métodos que classes ou objetos devem implementar

Estruturas complexas sendo definidas

```typescript
interface Funcionario {
	id: number;
	nome: string;
	salario: number;

	mostraSalario(): string
}

class Programador implements Funcionario {
	constructor(id: number, nome: string, salario: number) {}
	mostraSalario(): string {
		return `Programador ${this.nome} recebe: ${this.salario}`;
	}
}

let trainee: Funcionario = new Programador(1, "Focation", 1000);
console.log(trainee.mostraSalario());
``` 

Acima, temos que o objeto trainee será do tipo Funcionário, especificado na interface.

### Funcionalidades do TS 

`Unions`
Permitem que uma variável seja uma entre vários tipos

`Generics`
Permitem que variáveis sejam inseridas em tipos

`Decorators`
Permitem adicionar metaprogramação, ou seja realizar a alteração ou adição de funcionalidades a classes e seus membros

`Enums`
Definem conjuntos de constantes nomeadas