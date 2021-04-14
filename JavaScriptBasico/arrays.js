let aluno = [];

aluno.push('teste')  //adiciona no final
aluno.push('teste1')
aluno.unshift('teste2') //adiciona no inicio
aluno.pop() //retira do final e salva em variavel
delete aluno[2] //deleta este indice
aluno.slice(0, 3) //fatia o array
aluno instanceof Array // retorna se é um array ou não

console.log(aluno)