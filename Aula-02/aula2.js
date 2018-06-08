// Faça uma tabuada de 1 a 9 utilizando o laço de repetição for.
for (let a = 1; a < 10; a++) {
  for (let b = 1; b < 10; b++) {
    console.log(a + '*' + b + ' = ' , a * b);
  }
  console.log('-----------------------------');
}

// Faça uma função que receba três valores X, Y e Z, verifiquem se eles podem
// ser os comprimentos dos lados de um triângulos e se forem escrever uma
// mensagem informando se é um triângulo equilátero, isósceles ou escaleno:


function pitagoras(x,y,z) {
  if( x == 0 || y == 0 || z == 0) {
    return console.log('Não é um triangulo!!');
  }
  else if(x == y & x == z){
    return console.log('Equilátero');
  }
  else if(x == y || y == z) {
    return console.log('Isósceles');
  }
    console.log('Escaleno');
}

pitagoras(3,3,3);
pitagoras(4,4,3);
pitagoras(2,1,3);



// Faça uma pequena calculadora que receba 3 parâmetros (números e
//   operação) e retorne o resultado da operação. Exemplo: calculadora(1, ‘+’, 3);
//   deve retornar 4.



function calculadora(num1, op, num2) {
  let operacao;
  if(op == '+')
    operacao = num1 + num2;
  else if(op == '-')
    operacao = num1 - num2;
  else if(op == '*')
    operacao = num1 * num2;
  else operacao = num1 / num2;
  return console.log(operacao);
}

function calculadora2(num1, op, num2) {
  let operacao;
  switch (op) {
    case '+':
      operacao = num1 + num2;
      break;
    case '-':
      operacao = num1 - num2;
      break;
    case '*':
      operacao = num1 * num2;
      break;
    case '/':
      operacao = num1 / num2;
      break;
    default:
      operacao = 'Não válido'
      break;
  }
  return console.log(operacao);
}

calculadora2(2, '/', 6);
