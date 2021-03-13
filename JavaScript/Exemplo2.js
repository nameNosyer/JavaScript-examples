//transformando um array de objetos em array de array
var arrayObj = [ 
    {id: 1, nome: 'Reyson'},
    {id: 2, nome: 'Davi'},
    {id: 3, nome: 'Kauanny'},
    {id: 4, nome: 'Lucas'},
    {id: 5, nome: 'Rafael'}
  ];
  // usa a função map de JavaScript para nos ajudar, com ela conseguimos passar por cada um dos objetos do array
  var arr = arrayObj.map(function(obj) { //O código tem dois .map() O primeiro é porque quer manter um array com o mesmo numero de elementos.
    return Object.keys(obj).map(function(key) { //O segundo .map() é para transformar/mapear cada objeto numa array.
        return obj[key];
    });
  });
  console.log(arr)