// 2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let resultado;
let divisivelPor3 = 0;
let numerosDivisiveisPor3 = [];

 // 1. Quantos números do intervalo entre 2 e 150 são divisiveis por 3.
for (index = 2; index <= 150; index += 1)

 if (index % 3 === 0) {
   
    divisivelPor3 = divisivelPor3 + 1;
 
    }

 else {

    false;

    }

 // 2. Verificar se a quantidade é igual a 50.
if (divisivelPor3 === 50) {

// 3. Exibir uma mensagem secreta 
    console.log('50 números são divisíveis por 3');

}

else {

    console.log(divisivelPor3);

}    

