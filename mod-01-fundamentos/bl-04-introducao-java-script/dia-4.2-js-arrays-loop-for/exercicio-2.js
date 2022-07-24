/*

Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let index;
let somaValores = 0;

// 1. Somar todos os valores do array.

for (index = 0; index < numbers.length; index += 1) {

    somaValores += numbers[index];
    
 // 2. Imprimir o resultado.    

    console.log(somaValores);

}
