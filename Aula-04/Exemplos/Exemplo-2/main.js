let botao = document.querySelector('#btn');
let campoTexto = document.querySelector('#nome');
let select = document.querySelector('#cidade');

botao.addEventListener('click', function(){
  console.log('Fui clicado!!');
});


campoTexto.addEventListener('change', function(){
  console.log(campoTexto.value);
});


select.addEventListener('change', function(){
  console.log(select.value);
})

