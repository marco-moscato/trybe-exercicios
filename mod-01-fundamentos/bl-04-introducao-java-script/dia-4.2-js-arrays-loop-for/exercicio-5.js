/*

Utilizando for, descubra qual o maior valor contido no array e imprima-o;

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = [numbers[0]];

for (index = 1; index < numbers.length; index += 1) {

    if (numbers[index] > numbers[index -=]) {

       higherNumber.push(numbers[index]);

    } else {

        console.log(higherNumber);

    }

}