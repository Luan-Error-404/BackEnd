/*
15 - Implementar um programa que simule uma calculadora. O usuário deverá
informar dois valores e a operação desejada.
Com auxílio de um switch deve ser computado e mostrado o resultado da
operação.
*/

import rl from 'readline-sync';

let valor1 = rl.questionFloat("Digite o primeiro número: ");
let valor2 = rl.questionFloat("Digite o segundo número: ");
let operacao = rl.questionInt("Opções:\n[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão\n[5] Módulo\n\nQual opção deseja? ");

switch (operacao) {
    case 1:
        console.log(`O resultado de ${valor1} + ${valor2} é igual a ${valor1 + valor2}`);
        break;

    case 2:
        console.log(`O resultado de ${valor1} - ${valor2} é igual a ${valor1 - valor2}`);
        break;

    case 3:
        console.log(`O resultado de ${valor1} x ${valor2} é igual a ${valor1 * valor2}`);
        break;

    case 4:
        console.log(`O resultado de ${valor1} / ${valor2} é igual a ${valor1 / valor2}`);
        break;

    case 5:
        console.log(`O resultado de ${valor1} % ${valor2} é igual a ${valor1 % valor2}`);
        break;

    default:
        console.log("Seu burro! Coloque uma opção válida!");
}