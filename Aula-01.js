let valor = 13.141516;
let texto = "Meu primeiro projeto em JavaScript";
let boleano = true;

console.log(valor.toFixed(2)); //Arredonda o valor do número
console.log(texto.toUpperCase()); //Coloca todos os caracteres em caixa alta || Para o efeio ao contrário, use .toLowerCase()
console.log(boleano.toString()); //Converte para string

console.log("----------------------------------------");

console.log(typeof valor); // typeof retorna o tipo da variável
console.log(typeof texto);
console.log(typeof boleano);

console.log("----------------------------------------");

let lista = ["Luan","Steven","Vinicius","Guilherme","Felipe","João Paulo", "Arthur Santos"]; // O array é uma coleção de dados e com esse recurso podemos colocar mais de um valor em apenas uma variável
console.log(lista[0],lista[3]) //Emprimindo os itens do array de acordo com o índice || Começa em 0

console.log("----------------------------------------");

let carros = []; // Array vazia
carros.push("Palio") //Adiciona um item no array
carros.push("Hailux") //Adiciona um item no array
carros.push("Kombi") //Adiciona um item no array
console.log(carros)

console.log("----------------------------------------");

console.log("Quantidade de itens: "+lista.length); //Conta a quantidade de itens no array
console.log("Quantidade de letras no item: "+carros[2].length); //Conta a quantidade de caracteres em um item do array

console.log("----------------------------------------");

console.log("Teste",9) //Uma string e um número || Serve para vários tipos de valores
console.log("Teste"+9) //Concatena uma string e um número || Serve para vários tipos de valores
console.log(`Teste ${9}`) //Interpola um número em uma string || Serve para vários tipos de valores