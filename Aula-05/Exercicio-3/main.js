let paragrafo = document.querySelector('p');
let textoDoPararagrafo = paragrafo.innerHTML;

textoDoPararagrafo = textoDoPararagrafo.replace(/de futebol/gi, 'de zoeira');

textoDoPararagrafo = textoDoPararagrafo.replace(/\d{4}/g, 'É TETRA');

paragrafo.innerHTML = textoDoPararagrafo;

