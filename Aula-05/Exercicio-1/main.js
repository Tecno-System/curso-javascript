let livros = [
	'O Orfanato da Srta. Peregrine para Crianças Peculiares', 
	'Cidade dos Etéreos', 
	'Desventuras em Série',
	'O Circo da Noite', 
	'A Bússola de Ouro'
];

let lista = document.querySelector('.livros');
let msg = document.querySelector('span');

livros.forEach(function(livro){
	let elem = document.createElement('li');
	elem.innerHTML = livro;
	lista.appendChild(elem);

	elem.addEventListener('dblclick', function(){
		elem.remove();
		msg.style.opacity = 1;

		setTimeout(function(){
			msg.style.opacity = 0;
		}, 1000);
	});
});