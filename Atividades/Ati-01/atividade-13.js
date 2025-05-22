/*
13 - Solicite ao usuário para inserir um número representando um dia da
semana (1 a 7) e mostre o nome do dia correspondente.
*/
import rl from 'readline-sync';

let dia = rl.questionInt("Informe o dia da semana em números: ")
if (dia == 2) {
    console.log("É Segunda-Feira!");
} else if (dia == 3) {
    console.log("É Terça-Feira!");
} else if (dia == 4) {
    console.log("É Quarta-Feira!");
} else if (dia == 5) {
    console.log("É Quinta-Feira!");
} else if (dia == 6) {
    console.log("É Sexta-Feira!");
} else if (dia == 7) {
    console.log("É Sábado!");
} else if (dia == 1) {
    console.log("É Domingo!");
}
