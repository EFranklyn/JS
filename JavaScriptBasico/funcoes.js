function saudacao(planeta = ''){
 console.log('ola mundo ' + planeta);
 return 9;
}
let num = saudacao('saturno');
console.log(num)

let soma = function (num1, num2){
 return num1 + num2;
};

console.log(soma(2,3))