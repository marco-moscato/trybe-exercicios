/*

Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Calcule a média aritmética dos valores contidos no array

// Para encontrar a quantidade de elementos no array
let quantityOfNumbers = numbers.length

// Para encontrar a soma dos elementos
let sumOfNumbers = 0;

for (index = 0; index < numbers.length; index += 1) {

    sumOfNumbers += numbers[index];

}

// Para imprimir a média aritmética dos valores contidos no array

var average = sumOfNumbers / quantityOfNumbers;
console.log(average);
