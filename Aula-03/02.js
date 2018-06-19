let pessoas = [
  {
    nome: 'Cristiano',
    idade: 23
  },
  {
    nome: 'Maria',
    idade: 13
  },
  {
    nome: 'Josefina',
    idade: 53
  },
  {
    nome: 'Marcos',
    idade: 35
  }
];

pessoas.forEach(function(pessoa){
  console.log(`${pessoa.nome} tem ${pessoa.idade} anosde idade`);
});


let maioresDeIdade = pessoas.map(function(pessoa){
  return pessoa.idade > 18;
});

console.log(maioresDeIdade);

