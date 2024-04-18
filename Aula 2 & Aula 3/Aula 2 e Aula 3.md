# Primeiro Contato e Conceitos Básicos

> Falaaa meus bons! Estas aulas introduziram os trainees com o JS e o ambiente pelo qual estaremos aprendendo a mexer com a ferramenta. Além de fornecer alguns conceitos básicos. Aulas → Aula 2 + Aula 3

## Conteúdo da Aula

### Algumas Infos Gerais (Aula 2):

- [Baixar o node](https://nodejs.org/en/download/current) & [Baixar o VsCode](https://code.visualstudio.com/download)

  Node → permite que os programadores rodem códigos JS fora do navegador como na linha de navegador (recurso usado nas aulas) quanto para o desenvolvimento de servidores.

  VsCode → editor de texto 

  Arquivos JS terminam em .js ⇒ exemplo seria Exemplo.js. Dessa forma indicamos para o computador que este arquivo é do tipo JS

### Introdução ao JS (Aula 3):

Aqui foram apresentados alguns conceitos e comandos básicos do JS.

Cada conceito específico foi separado em toggle. Tente se desafiar em lembrar o que é antes de abrir a colinha kkkk

- Saídas
    
    ```js
    // Este é o comando de saída, que apresenta algo no ambiente de execução
    console.log("Isto é uma saída, bom dia cjotinhas");
    ```
    
- Comentários
    
    ```js
    // Comentário de linha única:
    // Bora ajudar nossos coleguinhas programadores? 
    
    // Comentários de múltiplas linhas:
    /*
    - Para facilitar leitura
    - Para explicar funcionamento
    - Para detalhar 
    - Para orientar
    = Use comentários
    */
    ```
    
- Valores Fixos vs. Variáveis
    
    ```js
    // 4 & 8 são valores fixos
    console.log(8 * 4);
    // numero é um valor variável, poderia usar 7, 8, 9, ou 10
    let numero = 7;
    
    // mostrando numero ao quadrado
    console.log(numero * numero);
    ```
    
- Diferenças entre var, let & const
    
    Variáveis → são usadas para armazenar e identificar valores
    
    `var` keyword usado antigamente e deve apenas ser usado em browsers antigos. 
    
    `const` → valores armazenados não podem ser mudados 
    
    `let` → valores armazenados podem ser mudados
    
    Recomendação: Usar `let` apenas quando não se consegue usar `const`
