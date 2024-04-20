// Possiblidades de Loops

// Loops for
for (let i = 10; i > 0; i--) {
    if (i % 5 == 0) { // i seja multiplo de 5
        console.log(i);
    }
}

// Loops while
let contador = 9;
let flag = true;
while (flag) {
    console.log(contador);
    if (contador == 1) {
        flag = false;
    }
    contador -= 2 // contador = contador - 2 => para primeira iteracao temos contador = 9 - 2 
}

// Qual é a diferença do do while para o while?
do {
    // executa o que estiver aqui antes de checar condição e continuar
    
}
while (condition);