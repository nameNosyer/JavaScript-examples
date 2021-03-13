// criando um array com 10 numeros aleatorios entre 0 e 20
var arr = [];
var count = 0;
while(count < 10) {
    arr.push(Math.round(Math.random() * 20)); // A fução Math.round retorna numeros inteiros.
    count++;                    // A função Math.random retorna numeros aleatorios
}
console.log(arr);