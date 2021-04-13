let num = Number(prompt('digite um número'));
document.getElementById('titulo').innerHTML = num
let texto 
let textoObject = document.getElementById('texto')

texto = `<p> A Raiz quadrada é ${Math.sqrt(num)}
<br/>${num} é inteiro: ${Number.isInteger(num)}
<br/> É NaN: ${Number.isNaN(num)}
<br/> Arredondado para cima: ${Math.floor(num)}
<br/> Arredondado para baixo: ${Math.ceil(num)}
<br/> Com duas casas decimais ${num.toFixed(2)}
</p>`
textoObject.innerHTML = texto;