
 /*
  Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
  Cada array deve conter os estados dessa região.
*/

let sul = ['Parana', 
           'Santa Catarina', 
           'Rio Grande do Sul'];

let sudeste = ['São Paulo', 
                'Rio de Janeiro',
                'Espirito Santo',
                'Minas Gerais'];

 /*
  Crie uma variável chamada `brasil`, que irá receber as duas regiões
  concatenadas. Mostre o `brasil` no console.
*/

let brasil = sul.concat(sudeste);
console.log(brasil);

/*
  Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
brasil.unshift('Para', 'Acre', 'Amazonas');
console.log(brasil);

/*
  Remova o primeiro estado do array `brasil` e mostre-o no console.
*/

brasil.shift();
console.log(brasil);
 /*
  Crie um novo array chamado `newSul`, que receba somente os estados do sul,
  pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

let newSul = brasil.slice(2,5);
 /*
  Mostre no console os estados que estão em `newSul`.
*/
console.log(newSul);
/*
  Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/

let nordeste = ['Bahia', 
                'Sergipe', 
                'Pernambuco', 
                'Alagoas',
                'Ceara'];
/*
  Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
  ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
  brasil = brasil.concat(nordeste);
  console.log(brasil);
/*
  usando forEach, percorra o array `brasil` e gere um novo array chamado
  `newBrasil`. Esse array deve ter cada item como um objeto, com as
  propriedades:
  - `id`: que será o índice do array `brasil`,
  - `estado`: que será o estado do array `brasil`.
*/

let newBrasil = [];

brasil.forEach(function(item, index){
  newBrasil.push(
    {id: index, estado: item}
  );
});
// Alternativa usando map
//let newBrasil = brasil.map(function(item, index){
//   return {id: index, estado: item};
// });

console.log(newBrasil);
/*
  Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
  atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
  - "Sim, todos os estados tem mais de 7 letras!"
  Senão, mostre no console:
  - "Nem todos os estados tem mais de 7 letras!"
*/

let temMaisDeSete = brasil.every(function(item){
  return item.length > 7;
});

console.log(
  temMaisDeSete ? 'Sim, todos os estados tem mais de 7 letras!'
  : 'Nem todos os estados tem mais de 7 letras!'
);

// Alternativa mais verbosa
// if(temMaisDeSete) {
//   console.log('Sim, todos os estados tem mais de 7 letras!');
// }else {
//   console.log('Nem todos os estados tem mais de 7 letras!')
// }
 /*
  Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
  resultado à uma variável. Se esse estado existir no array, mostrar a frase no
  console:
  - "Ceará está incluído!"
  Senão, mostrar a frase:
  - "Ceará não foi incluído :("
*/

let temCeara = brasil.some(function(item) {
  return item == 'Ceara';
});

console.log(
  temCeara
  ? 'Ceará está incluído!'
  : 'Ceará não foi incluído :('
);

/*
  Filtre o array criado acima, retornando somente os estados que tiverem
  ID par. Atribua o valor à uma variável chamada `filter`.
*/

let filter = brasil.filter(function(item, index){
  return index%2 == 0; 
});

console.log(filter);

