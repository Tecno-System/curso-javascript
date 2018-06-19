let nome = document.querySelector('.nome');
let url = document.querySelector('.url');
let cpf = document.querySelector('.cpf');
let btn = document.querySelector('.btn');
let regeSite = new RegExp('(https|http):\/\/\w*.\\w*(\\.\\w*)?', 'gi');
let regeCPF = new RegExp('\\d{3}.?\\d{3}.?\\d{3}-?\\d{2}', 'g');
let cadastro = {
  nome: '',
  site: '',
  cpf: ''
}


btn.addEventListener('click', function(event){
  event.preventDefault();
  validaNome(nome.value);
  validaSite(url.value);
  validaCPF(cpf.value);
});

function validaNome(valorDoNome) {
  if(valorDoNome == '') {
    alert('Preencha o campo nome');
    nome.style.backgroundColor = 'tomato';
  }else {
    cadastro.nome = valorDoNome;
  }
}

function validaSite(siteUrl) {
  if(!regeSite.test(siteUrl)){
    alert('Preencha o campo site');
    url.style.backgroundColor = 'tomato';
  }else {
    cadastro.site = siteUrl;
  }
}

function validaCPF(valorCpf){
  if(!regeCPF.test(valorCpf)) {
    alert('Preencha o campo cpf');
    cpf.style.backgroundColor = 'tomato';
  }else {
    cadastro.cpf = valorCpf;
  }
}