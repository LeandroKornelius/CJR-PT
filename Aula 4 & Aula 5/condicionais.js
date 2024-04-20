// Valores Booleanos
console.log(5 > 10);

// Operadores de Comparação
// igualdade, maior ou igual, nao igual a...
console.log(5 == "5");
console.log(5 != "5");
console.log(5 === "5");
console.log(5 !== "5");
// Lembrando que =, comando de atribuicao

// Operadores Lógicos
// "e" - &&, "ou" - || e "nao" - !
console.log(3 == 2 && 3 > 1);
console.log(3 != 3 || 3 <= 1);
console.log(!(3 == 3));


// Condicionais
let idade = 130;
// Pode beber?
if (idade >= 130) { // avaliar como F
    console.log("talvez seja uma boa segurar");
} else if (idade >= 18) {
    console.log("Cachaca pra dentoooo");
} else {
    console.log("segura mais uns anos e ta suave...");
}

// Operador Ternario
const numero = 7;
let result = (numero % 2 == 0) ? "Par" : "Impar";
console.log(result)