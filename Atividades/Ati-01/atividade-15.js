/*
15 - Implementar um programa que simule uma calculadora. O usuário deverá
informar dois valores e a operação desejada.
Com auxílio de um switch deve ser computado e mostrado o resultado da
operação.
*/

let valor1 = 15;
let valor2 = 27;
let operacao = "Multiplicação";

switch (operacao) {
    case "Soma":
        console.log("O valor é " + (valor1 + valor2))
        break;
    case "Subtração":
        console.log("O valor é " + (valor1 - valor2))
        break;
    case "Multiplicação":
        console.log("O valor é " + (valor1 * valor2))
        break;
    case "Divisão":
        console.log("O valor é " + (valor1 / valor2))
        break;
    case "Módulo":
        console.log("O valor é " + (valor1 % valor2))
        break;
}