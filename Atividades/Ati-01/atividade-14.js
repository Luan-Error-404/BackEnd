/*
14 - Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome
do mês.
*/

import rl from 'readline-sync';

let mes = rl.questionInt("Informe o mês em números: ")

switch (mes) {
    case 1:
        console.log("É Janeiro!");
        break;

    case 2:
        console.log("É Fevereiro!");
        break;

    case 3:
        console.log("É Março!");
        break;

    case 4:
        console.log("É Abril!");
        break;

    case 5:
        console.log("É Maio!");
        break;

    case 6:
        console.log("É Junho!");
        break;

    case 7:
        console.log("É Julho!");
        break;

    case 8:
        console.log("É Agosto!");
        break;

    case 9:
        console.log("É Setembro!");
        break;

    case 10:
        console.log("É Outubro!");
        break;

    case 11:
        console.log("É Novembro!");
        break;

    case 12:
        console.log("É Dezembro!");
        break;

    default:
        break;
}