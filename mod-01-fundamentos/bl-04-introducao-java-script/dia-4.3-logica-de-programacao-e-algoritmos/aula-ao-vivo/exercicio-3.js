/*

3. Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ e imprime quem é a mais nova no formato: "Pessoa" é a mais nova.

*/

// 1. Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ

var idadePessoaX = 40;
var idadePessoaY = 50;
var idadePessoaZ = 30;

//2. Imprimir quem é a mais nova no formato: "Pessoa" é a mais nova.

if (idadePessoaX < idadePessoaY && idadePessoaX < idadePessoaZ) {

    console.log("Pessoa X é a mais nova");

}

else if (idadePessoaY < idadePessoaX && idadePessoaY < idadePessoaZ) {

    console.log("Pessoa Y é a mais nova");

}

else {

    console.log("Pessoa Z é a mais nova");

}