// Pega todos os elementos html que iremos utilizar.
const $cep    = document.querySelector('[data-js="cep"]');
const $rua    = document.querySelector('[data-js="rua"]');
const $bairro = document.querySelector('[data-js="bairro"]');
const $cidade = document.querySelector('[data-js="cidade"]');
const $estado = document.querySelector('[data-js="estado"]');
const $btn    = document.querySelector('[data-js="btn-buscar"]');
const $msg    = document.querySelector('[data-js="msg"]');

// Define uma variavel global para ser usada futuramente.
let endereco;

// Adciona um evento no botão que será responsavel por executar as funções do nosso app.
$btn.addEventListener('click', function(event){
  event.preventDefault();
  buscarCep($cep.value);
  setTimeout(function(){
    preencheCampos(endereco);
  }, 1000)
})

// Função responsável por receber um cep e retornar suas informações.
function buscarCep(cep) {
  $msg.innerHTML = `Buscando informações referente ao cep ${cep} ...`;
  fetch(`http://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`)
  .then(resposta => resposta.json())
  .then(dados => endereco = dados)
  .catch(e => console.log('Ops, ocorreu um erro. =/', e));
}

// Função que preenche os campos com os dados vindos da API.
function preencheCampos(dados) {
  $rua.value    = dados.address     || '';
  $bairro.value = dados.district    || '';
  $cidade.value = dados.city        || '';
  $estado.value = dados.state       || '';
  $msg.innerHTML    = dados.message || 'Sucesso!!'
}

