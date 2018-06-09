// Crie uma função com as seguintes características:
// 1. A função deve receber 3 argumentos.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
// 4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne o valor booleano `false`.


// function recebeArgumentos(a, b, c) {
//  if(a != undefined && b == undefined && c == undefined) {
//   return console.log(a);
//  }
//  else if(a != undefined && b != undefined && c == undefined) {
//    return console.log(a + b);
//  }

//  else if(a  && b && c) {
//    return console.log((a + b) / c);
//  }

//  return console.log(false);
// }

// recebeArgumentos(3,3,2);

function convertToHex(cor) {
  let hexa;
  switch (cor) {
    case 'red':
      hexa = '#ff0000';
      break;
    case 'blue':
      hexa = '#0000ff';
      break;
    case 'green':
      hexa = '#00ff00';
      break;
    case 'black':
      hexa = '#000000'
      break;
    case 'white':
      hexa = '#ffffff'
      break;
    default:
      return console.log('Não temos o equivalente hexadecimal para ' + cor + ' .')
      break;
    }
    return console.log(`O hexadecimal para a cor ${cor} é ${hexa}.`);
}

convertToHex('red');
convertToHex('blue');
convertToHex('green');
convertToHex('rosa');


































