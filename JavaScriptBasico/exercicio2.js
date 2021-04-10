/*
Elisson franklyn tem 30 anos, pesa 84 KG
tem 1.8 de altura e seu IMC é de xx.xxxxxx
Franklyn nasceu em xxxx
*/

const nome = 'Elisson';
const sobreenome = 'Franklyn';
const idade = 25;
const peso = 63;
const alturaEmCm = 1.75;
let IMC = peso / (alturaEmCm * alturaEmCm);
let anoDeNacimento = 2021 - idade;

//forma que eu fiz está certa
console.log(nome + ' ' + sobreenome + ' '
+ ' tem ' + idade + ' anos, pesa ' + peso + ' KG tem ' +
alturaEmCm +' de altura e seu IMC é de '+ IMC + sobreenome +
' nasceu em '+ anoDeNacimento) 

// forma que o professor ensinou

console.log(`${nome} ${sobreenome} tem ${idade} anos, pesa ${peso}
 KG tem ${alturaEmCm} de altura e seu IMC é de ${IMC}
 ${sobreenome} nasceu em ${anoDeNacimento}`) 