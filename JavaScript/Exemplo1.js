//invertendo os elementos
var arr1 = [1,2,3,4,5,6,7,8,9,0]; //criando e populando
function reverse(arr1){ //criando função e usando array como parametro 
  var arr2 = []; //criando arrey vazio que sera preenchido depois
  for (var i = arr1.length - 1; i >= 0 ; i--){//diminui 1 na inicialização para igualar o numero de elementos e indices
    arr2.push(arr1[i]);//arr[i] representa cada elemento em seu respectivo índice                        
  }               //.push() método para 'empurrar' arr[i]até o final do arr2                              
  return arr2; //retorna a sequência invertida.
}
console.log(reverse(arr1));