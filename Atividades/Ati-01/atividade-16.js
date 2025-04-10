/*
16 - Um funcionário irá receber um aumento de acordo com o seu
categoria de bonificação (A,B,C e D).
A tabela abaixo mostra o percentual de aumento de cada
categoria:
    ________________________________
   | Categoria     |      Percentual|
   |---------------|----------------|
   | A             |      5%        |
   | B             |      10%       |
   | C             |      15%       |
   | D             |      20%       |
   |________________________________|

Faça um programa que leia a categoria de bonificação e o
salário atual de um funcionário, em seguida calcule e
imprima o seu novo salário. Use a instrução switch.
*/

let categoria = "B";
let salario = 3500;

switch (categoria) {
    case "A":
        console.log (`Seu salário atual é de R$ ${salario}, sendo assim, seu salário irá para R$ ${salario + (salario*0.05)}.`)
        break;
    case "B":
        console.log (`Seu salário atual é de R$ ${salario}, sendo assim, seu salário irá para R$ ${salario + (salario*0.1)}.`)
        break;
    case "C":
        console.log (`Seu salário atual é de R$ ${salario}, sendo assim, seu salário irá para R$ ${salario + (salario*0.15)}.`)
        break;
    case "D":
        console.log (`Seu salário atual é de R$ ${salario}, sendo assim, seu salário irá para R$ ${salario + (salario*0.2)}.`)
        break;
}