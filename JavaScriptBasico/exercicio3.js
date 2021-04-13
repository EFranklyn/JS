let varA = 'A'  //b
let varB = 'B'  //c
let varC = 'C'  //a
let aux
aux = varC;
varC = varA;
varA = varB;
varB = aux;

console.log(varA,varB,varC);

