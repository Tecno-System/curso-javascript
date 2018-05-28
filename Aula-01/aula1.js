console.log('Aula 1');

/*Declare 2 variáveis de formas diferentes e atribua valores de tipos diferentes.*/
var a = 1;
let b = 'um';

console.log('Valor de a: ', a);
console.log('Valor de b: ', b);
/*Agora altere os valores das suas variáveis. */
a = 'dois';
b = 3;

console.log(a,b);

/*Crie uma variavel mySum com o valor 5 * 3.*/
let mySum = 5 * 3;

console.log(mySum);

/*Agora some 8 ao valor de mySum.*/
mySum = mySum + 8; 
/*Ou*/
mySum += 8;

console.log(mySum);

/*Crie uma variável nome e atribua seu name a ela, logo em seguida crie uma variável lastName e atribua seu sobre nome.*/
let name = 'Cristiano';
let lastName = 'Gonçalves';

/*Agora crie uma variável chamada fullName que receba a concatenação das variáveis anteriores.*/
let fullName = name + ' ' + lastName;
console.log(fullName);

/*Liste 5 tipos diferentes de dados primitivos.*/
console.log('Number, Boolean, Undefined, Null, Symbol, Object, Function, String');

/*Faça duas comparações entre um número e uma string. Uma comparação deve retornar true e a outra false.*/
console.log(1 == '1');
console.log(1 > '3');

/*Declare uma variável que receba o valor true sem utilizar a palavra true. Ou seja: myVar = true;  não é uma resposta válida.*/
let myVar = !!1;
console.log(myVar);

/*Faça uma operação que retorne um NaN.*/
console.log(1 - 'oi');

/*Digite 2 dados que tenham o valor lógico verdadeiro e 2 que tenham o valor lógico falso.*/
console.log('True: ', !!2);
console.log('True: ', !!'nome');
console.log('False: ', !!0);
console.log('False: ', !!'');
