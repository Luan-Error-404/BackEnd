/*
18 - Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de
alunos.
O Programa deverá:
Ler o número de alunos da turma;
Ler as notas dos 4 bimestres de cada aluno;
Calcular e imprimir a média do aluno;
Calcular e imprimir a média da turma.
*/

import rl from 'readline-sync';

let numAlunos = rl.questionInt("Quantos alunos tem na sala? ");
let bimestres = 1;
let contador = 1;
let mediaAluno = 0;
let mediaTurma = 0;

while (contador <= numAlunos) {
    while (bimestres <= 4) {
        let alunoVez = rl.questionInt(`Qual é a nota do ${contador}º Aluno, no ${bimestres}º Bimestre? `);
        mediaAluno += alunoVez
        bimestres++
    }
    console.log(`\nA média do ${contador}º Aluno é de ${mediaAluno/4}\n`);
    mediaTurma += mediaAluno/4;
    mediaAluno = 0;
    bimestres = 1;
    contador++
}
console.log(`A média da turma é de ${mediaTurma/numAlunos}`);