/*

Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersNotEven = [];

// Para descubrir quantos valores impares existem no array;

for (index = 0; index < numbers.length; index += 1) {

    if (numbers[index] % 2 > 0) {

        // Para inputar os números ímpares no array
        numbersNotEven.push(numbers[index]);     

    // Tirar dúvida: pode deixar o else vazio? Quais são as consequências?    
    } else {

    }

}


if (numbersNotEven.length > 0) {

    console.log(numbersNotEven.length);

} else {

    console.log("nenhum valor ímpar encontrado");

}
    
