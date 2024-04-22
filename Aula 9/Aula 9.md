# Estruturas de Dados

> Vruuum, vruum! Lá vem mais uma aula para vocês!
Que tal aprendermos formas diferentes de armazenar informações na linguagem?
Formas de guardar dados importantes para o nosso programa? Iremos falar disso mesmo, estrutura de dados!
Abordaremos as principais: objetos, arrays, strings e algumas outras.
Fica de boas e simboraaaa!
Aulas → Aula 9

## Conteúdo da Aula

Vimos que variáveis são caixas para guardarmos informações.

### Algumas já Abordadas

- `Strings` → Armazenam textos, escritos com aspas simples ou duplas
- `Numbers` → Temos apenas um tipo de número em JS, conseguindo representar números grandes, inteiros e floats
- `Booleanos` → Armazena valor verdadeiro, ou seja, Verdadeiro ou Falso

Será que podemos armazenar coisas mais complexas do que apenas um valor único?

### Objetos

- Objetos permitem que a gente armazene vários valores em uma variável!
- Tais valores são armazenados em pares nome e valor
- Nos objetos podemos ter:
    - Propriedades
    - Métodos
- Exemplo de propriedades e métodos
    
    ```javascript
    const relampagoMcQueen = {
    	nome: "Relâmpago McQueen",
    	idade: 47,
    	profissao: "Carro de corrida profissional",
    	fala: "Catchau",
    	catchau() {
    		console.log(`Vruum! Olá, eu sou o ${this.nome}, mas imagino que vocês já sabiam. ${this.fala}!`);
    	}
    };
    ```
    
- Obs → `this` é uma palavra reservada para fazer referência ao objeto
    - O objeto sendo referenciado depende de onde a palavra é utilizada/chamada

### Arrays

- Arrays permitem que a gente armazene vários valores em uma variável!
- Tais valores são armazenados através da sua posição na lista de itens (índice)
    - Arrays são objetos? Sim, porém eles têm um funcionamento diferente pois fazem uso de números para acessar seu valor correspondente
- Declaração, Acesso e Métodos
    
    ```javascript
    const frutas = [];
    // a contagem de posições em arrays começa com o 0
    frutas[0] = 'banana'; // colocando a string banana na pos 0
    frutas[1] = 'maçã';
    frutas.push('limão');
    console.log(frutas.length);
    console.log(typeof frutas);
    ```
    
    - Obs → `typeof` retorna o tipo da variável
        - O que você acha que acontece quando vemos o tipo de um array?
