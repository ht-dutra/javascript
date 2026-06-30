function calcular(operacao) {
const num1 = Number(document.getElementById('n1').value);
const num2 = Number(document.getElementById('n2').value);

let total = 0; 
if (operacao === 'soma') {
    total = num1 + num2;
} else if (operacao === 'sub') {
    total = num1 - num2;


}
document.getElementById('resultado').innerText = total;
}
