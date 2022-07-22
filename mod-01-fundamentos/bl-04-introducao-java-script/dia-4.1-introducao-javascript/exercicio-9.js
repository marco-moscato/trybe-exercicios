/* 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const number1 = 50;
const number2 = 100;
const number3 = 10;

if ((number1 % 2 > 0) || (number2 % 2 >0) || (number3 % 2 >0)) {
    console.log(true);
}

else {
    console.log(false);
}