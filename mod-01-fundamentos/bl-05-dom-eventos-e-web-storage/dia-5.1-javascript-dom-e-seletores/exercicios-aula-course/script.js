/* 1) Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito. */
document.getElementById("page-title").innerText = "O Poderoso Chefão";

/* 2) Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo. */
document.getElementById("second-paragraph").innerText = "Parte 1, 2 e 3";

/* 3) Por fim, recupere o subtítulo e altere-o também. */
document.getElementById("subtitle").innerText = "Francis Ford Coppola";

/* 1) Adicione uma classe igual para os dois parágrafos. */
/* 2) Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName; */
console.log(document.getElementsByClassName("all-paragraphs"));

/* Altere algum estilo do primeiro deles.*/
document.getElementsByClassName("all-paragraphs")[0].style.color =  "red";

/* Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName. */
document.getElementsByTagName("h4")[0].style.color = "blue";




