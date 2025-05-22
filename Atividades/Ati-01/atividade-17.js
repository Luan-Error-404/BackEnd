/*
17 - Escreva um programa que peça ao usuário para digitar um número e, em seguida,
imprima a tabuada desse número usando um loop while.
*/

import rl from 'readline-sync';

let valor = rl.questionInt("Digite um valor numérico: ");
let contador = 1;

console.log(`Tabuada do ${valor}:\n`)
while (contador <= 10) {
    console.log(`${valor} x ${contador} = ${valor * contador}`);
    contador++;
};
console.log(`\nEssa é a tabuada do ${valor}`);