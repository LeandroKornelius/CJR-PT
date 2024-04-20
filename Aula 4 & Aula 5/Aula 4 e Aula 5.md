# Condicionais e Loops

> Olá, queridos! Vamos continuar aprendendo mais sobre JS? A conversa de hoje vai abordar mais coisas ainda que é possível fazer com JS, por isso conversaremos sobre proposições e estruturas repetitivas. Pega um redbull e vamos nessa! Aulas → Aula 4 + Aula 5 + Aula 6

## Conteúdo da Aula

### Booleanos e Condicionais (Aula 4):

- **Booleanos**
  
  - São valores que avaliam como verdadeiro ou falso
  
  ```jsx
  5 <= 10
  // Qual é o resultado desta expressão? O 5 é menor ou igual a 10? Não, portanto é F
  ```

- **Operadores de Comparação**

| Operador | Descrição                      |
| -------- | ------------------------------ |
| ==       | Igual a                        |
| ===      | Igual a com mesmo tipo        |
| !=       | Não igual a                    |
| !==      | Não igual a ou sem mesmo tipo |
| >        | Maior do que                   |
| <        | Menor do que                   |
| >=       | Maior ou igual                 |
| <=       | Menor ou igual                 |

- **Operadores Lógicos**
  
  - && → Indica “e”
  - || → Indica “ou”
  - ! → Indica “não”

- **Condicionais**

```jsx
    if (condição1) {
        // código aqui será executado, quando condição1 for V
    } else if (condição2) {
        // código aqui será executado, quando condição2 for V
    } else {
        // código aqui só será executado, quando nenhuma condição acima for V
    }
  ```

  - **Operador Ternário**

    - Usado como forma compacta de expressar declarações condicionais.

    ```jsx
        // Exemplo: 
        const numero = 7;
        // Quando (numero % 2 == 0) for V, temos result como Par
        // Se for F, temos result como Impar
        let result = (numero % 2 == 0) ? "Par" : "Impar"; 
        console.log(result)
    ```