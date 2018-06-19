let campoTexto = document.querySelector('#tarefaNome');
let botao = document.querySelector('#btn');
let listaDeTarefas = document.querySelector('#listaTarefas');
let msg = document.querySelector('#msg');

botao.addEventListener('click', function(){
  let campoValue = campoTexto.value;
  msg.innerHTML = '';
  
  if(validaCampo(campoValue)) {
    campoTexto.value = '';
    mudaCor('#fff');
    return insereTarefa(campoValue);
  }

    mudaCor('red');
    mostraMsg();
});


function insereTarefa(tarefa){
  let html = `<li>${tarefa}</li>`
  return listaDeTarefas.innerHTML += html;
}

function validaCampo(campo) {
  return campo != '';
}

function mudaCor(cor) {
  return campoTexto.style.backgroundColor = cor;
}

function mostraMsg() {
  msg.innerHTML = 'Preencha o campo!!';
}