/* 

Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Calcule a média aritmética dos valores contidos no array

// Para encontrar a quantidade de elementos no array
let quantityOfNumbers = numbers.length

// Para encontrar a soma dos elementos
let sumOfNumbers = 0;

for (index = 0; index < numbers.length; index += 1) {

    sumOfNumbers += numbers[index];

}

// Para imprimir a média aritmética dos valores contidos no array

var average = sumOfNumbers / quantityOfNumbers;

// Imprimir a mensagem "Valor maior que 20" ou "Valor menor que 20";

if (average > 20) {

    console.log("Valor maior que 20");

} else {

    console.log("Valor menor ou igual a 20");

}