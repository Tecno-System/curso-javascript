let herois = [
  {
    nome: 'Batman',
    imagem: 'https://www.drawingtutorials101.com/drawing-tutorials/Cartoon-Characters/Batman/batman-face/tn_how-to-draw-batman-face.jpg',
    ocupacao: [
      'Magnata de negócios',
      'Filantropista',
      'Proprietário da corporação Wayne Enterprises',
      'Vigilante mascarado',
      'Defensor da lei',
      'Detetive',
      'Líder da Corporação Batman'
    ]
  },

  {
    nome: 'Capitão América',
    imagem: 'https://s.aficionados.com.br/imagens/capitao-america_s.jpg',
    ocupacao: [
      'Herói', 
      'ex-soldado', 
      'desenhista', 
      'ex-agente da Shield'
    ]
  },

  {
    nome: 'Homem Aranha',
    imagem: 'http://www.ramascreen.com/wp-content/uploads/2017/06/Marvels-Spider-Man-150x150.jpg',
    ocupacao: [
      'Herói', 
      'Estudante', 
      'Inventor', 
      'Fotógrafo', 
      'Vigilante', 
      'Cientista (formado em biofísica e bioquímica)',
      'CEO das Indústrias Parker'
    ]
  },

  {
    nome: 'Mulher Maravilha',
    imagem: 'http://postersantiquesjunk.com/wp-content/uploads/2017/07/ww3-150x150.jpg',
    ocupacao: [
      'Enfermeira da Força Aérea Americana (originalmente)',
      'Oficial da Inteligência Militar',
      'Agente do Departamento de Assuntos Meta-Humanos (atualmente)',
      'Princesa de Themyscira',
      'Guerreira Amazona',
      'Herdeira Mortal dos Deuses Gregos',
      'Embaixadora no mundo do patriarcado',
      'Deusa da Guerra e Aventureira'
    ]
  },

  {
    nome: 'Super Homem',
    imagem: 'http://esportsprobr.com.br/conteudo/wp-content/uploads/2018/04/arena-of-valor-superman-150x150.jpg',
    ocupacao: ['Repórter']
  },

  {
    nome: 'Thor',
    imagem: 'http://www.legiao42.com.br/wp-content/uploads/2018/02/1-150x150.jpg',
    ocupacao: [
      'Príncipe herdeiro de Asgard', 
      'Deus dos Trovão Asgardiano', 
      'ex-Monarca do Céu Asgardiano', 
      'Médico', 
      'Cirurgião (como Blake)', 
      'Trabalhador de construção (como Jarlson)', 
      'Técnico de EMS (como Jake Olson)'
    ]
  },

  {
    nome: 'Home de Ferro',
    imagem: 'https://galaxianerd.com/wp-content/uploads/2018/03/Coipel-Iron-Man-600-banner-e1521509627736-150x150.jpg',
    ocupacao: [
      'Engenheiro mecânico', 
      'CEO das Indústrias Stark', 
      'inventor', 
      'filantropo', 
      'ex-diretor da S.H.I.E.L.D'
    ]
  },

  {
    nome: 'Deadpool',
    imagem: 'https://i0.wp.com/instaseriados.com.br/wp-content/uploads/2018/03/deadpool-o-mercenario-tagarela-ganha-referencia-em-sua-propria-hq.jpg?resize=150%2C150&ssl=1',
    ocupacao: ['Ex-militar', 'mercenário']
  },

  {
    nome: 'Wolverine',
    imagem: 'http://impulsohq.com/wp-content/uploads/2017/09/wolverine-legacy-150x150.jpg',
    ocupacao: [
      'Mestre Samurai', 
      'Diretor', 
      'Aventureiro', 
      'Instrutor', 
      'ex-co-proprietário do Bar Princesa',
      'ex-barman', 
      'ex-mercenário',
      'ex-soldado (antigo capitão nas forças armadas Canadense designado à inteligência)', 'ex-Marinheiro', 
      'ex-Mecânico'
    ]
  }
];

// -----------------------------------------------------------------------------------------------------
let listaDeHerois = document.querySelector('.listaDeHerois');

function montaHTML(herois) {
  return herois.map(function(heroi){
    return `
    <div class="heroi">
      <img src="${heroi.imagem}"/>
      <h2>${heroi.nome}</h2>
      <ul>
        <li>${heroi.ocupacao.join(' ')}</li>
      </ul>
    </div>`;
  });
}

listaDeHerois.innerHTML = montaHTML(herois);
