/*
13 - Solicite ao usuário para inserir um número representando um dia da
semana (1 a 7) e mostre o nome do dia correspondente.
*/
import rl from 'readline-sync';

let dia = rl.questionInt("Informe o dia da semana em números: ")

switch (dia) {
    case 1:
        console.log("É Segunda-Feira!");
        break;

    case 2:
        console.log("É Terça-Feira!");
        break;

    case 3:
        console.log("É Quarta-Feira!");
        break;
    
    case 4:
        console.log("É Quinta-Feira!");
        break;

    case 5:
        console.log("É Sexta-Feira!");
        break;
    
    case 6:
        console.log("É Sábado!");
        break;
    
    case 7:
        console.log("É Domingo!");
        break;
    
    default:
        console.log("Valor inserido inválido. Tente novamente.")
        break;
}