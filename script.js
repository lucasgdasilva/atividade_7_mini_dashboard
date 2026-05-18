////////// Estatísticas de jogadores //////////

// Dados dos jogadores - Artilheiros
const artilheiros = [
  { name: 'Kaio JORGE', goals: 21, logo: 'cruzeiro.png' },
  { name: 'Giorgian DE ARRASCAETA', goals: 18, logo: 'flamengo.png' },
  { name: 'Vitor ROQUE', goals: 16, logo: 'palmeiras.png' },
  { name: 'RAYAN', goals: 14, logo: 'vasco.png' },
  { name: 'Pablo VEGETTI', goals: 14, logo: 'vasco.png' }
];

// Função para renderizar gráfico de artilheiros
function renderArtilheiros(data) {
  const container = document.getElementById('artilheiros');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(player => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (player.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${player.logo}" alt="${player.name}" class="img-jogador" />
        <p class="nome-jogador">${player.name}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${player.goals}</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderArtilheiros(artilheiros);

// Dados dos jogadores - Assistências
const assistencias = [
  { name: 'Giorgian DE ARRASCAETA', goals: 14, logo: 'flamengo.png' },
  { name: 'Paulo HENRIQUE', goals: 8, logo: 'vasco.png' },
  { name: 'Kaio JORGE', goals: 8, logo: 'cruzeiro.png' },
  { name: 'Alan PATRICK', goals: 7, logo: 'internacional.png' },
  { name: 'JHON JHON', goals: 7, logo: 'bragantino.png' }
];

// Função para renderizar gráfico de assistências
function renderAssistencias(data) {
  const container = document.getElementById('assistencias');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(player => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (player.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${player.logo}" alt="${player.name}" class="img-jogador" />
        <p class="nome-jogador">${player.name}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${player.goals}</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderAssistencias(assistencias);

// Dados dos jogadores - Gols + Assistências
const golsAssistencias = [
  { name: 'Giorgian DE ARRASCAETA', goals: 32, logo: 'flamengo.png' },
  { name: 'Kaio JORGE', goals: 29, logo: 'cruzeiro.png' },
  { name: 'Vitor ROQUE', goals: 19, logo: 'palmeiras.png' },
  { name: 'REINALDO', goals: 19, logo: 'mirassol.png' },
  { name: 'Alan PATRICK', goals: 18, logo: 'internacional.png' }
];

// Função para renderizar gráfico de gols + assistências
function renderGolsAssistencias(data) {
  const container = document.getElementById('golsAssistencias');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(player => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (player.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${player.logo}" alt="${player.name}" class="img-jogador" />
        <p class="nome-jogador">${player.name}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${player.goals}</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderGolsAssistencias(golsAssistencias);

// Dados dos jogadores - Cartões amarelos
const cartoesAmarelosJogadores = [
  { name: 'Alexander BARBOZA', goals: 15, logo: 'botafogo.png' },
  { name: 'Lucas ROMERO', goals: 12, logo: 'cruzeiro.png' },
  { name: 'MATHEUZINHO', goals: 12, logo: 'corinthians.png' },
  { name: 'GABRIEL', goals: 11, logo: 'bragantino.png' },
  { name: 'Lucas LIMA', goals: 11, logo: 'sport.png' }
];

// Função para renderizar gráfico de cartões amarelos (jogadores)
function renderCartoesAmarelosJogadores(data) {
  const container = document.getElementById('cartoesAmarelos');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(player => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (player.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${player.logo}" alt="${player.name}" class="img-jogador" />
        <p class="nome-jogador">${player.name}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${player.goals}</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderCartoesAmarelosJogadores(cartoesAmarelosJogadores);

// Dados dos jogadores - Cartões vermelhos
const cartoesVermelhosJogadores = [
  { name: 'José MARTINEZ', goals: 2, logo: 'corinthians.png' },
  { name: 'Hugo MOURA', goals: 2, logo: 'vasco.png' },
  { name: 'LYANCO', goals: 2, logo: 'atleticomg.png' },
  { name: 'Júnior ALONSO', goals: 2, logo: 'atleticomg.png' },
  { name: 'DUDU', goals: 2, logo: 'vitoria.png' }
];

// Função para renderizar gráfico de cartões vermelhos (jogadores)
function renderCartoesVermelhosJogadores(data) {
  const container = document.getElementById('cartoesVermelhos');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(player => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (player.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${player.logo}" alt="${player.name}" class="img-jogador" />
        <p class="nome-jogador">${player.name}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${player.goals}</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderCartoesVermelhosJogadores(cartoesVermelhosJogadores);

// Dados dos jogadores - Minutos jogados
const minutosJogados = [
  { name: 'FÁBIO', goals: 3420, logo: 'fluminense.png' },
  { name: 'Gabriel BRAZÃO', goals: 3398, logo: 'santos.png' },
  { name: 'Agustín ROSSI', goals: 3330, logo: 'flamengo.png' },
  { name: 'JEMMES', goals: 3274, logo: 'mirassol.png' },
  { name: 'DANIELZINHO', goals: 3269, logo: 'mirassol.png' }
];

// Função para renderizar gráfico de minutos jogados
function renderMinutosJogados(data) {
  const container = document.getElementById('minutosJogados');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(player => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (player.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${player.logo}" alt="${player.name}" class="img-jogador" />
        <p class="nome-jogador">${player.name}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${player.goals}</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderMinutosJogados(minutosJogados);


////////// Estatísticas de goleiros //////////


// Dados dos goleiros - Fichas limpas
const fichasLimpas = [
  { name: 'Agustín ROSSI', goals: 18, logo: 'flamengo.png' },
  { name: 'FÁBIO', goals: 16, logo: 'fluminense.png' },
  { name: 'CÁSSIO', goals: 14, logo: 'cruzeiro.png' },
  { name: 'RAFAEL', goals: 12, logo: 'saopaulo.png' },
  { name: 'EVERSON', goals: 12, logo: 'atleticomg.png' }
];

// Função para renderizar gráfico de fichas limpas
function renderFichasLimpas(data) {
  const container = document.getElementById('fichasLimpas');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(player => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (player.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${player.logo}" alt="${player.name}" class="img-jogador" />
        <p class="nome-jogador">${player.name}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${player.goals}</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderFichasLimpas(fichasLimpas);

// Dados dos goleiros - Porcentagem de defesas
const porcentagemDefesas = [
  { name: 'CÁSSIO', goals: 80.0, logo: 'cruzeiro.png' },
  { name: 'WALTER', goals: 79.3, logo: 'mirassol.png' },
  { name: 'Agustín ROSSI', goals: 78.9, logo: 'flamengo.png' },
  { name: 'RAFAEL', goals: 74.7, logo: 'saopaulo.png' },
  { name: 'WEVERTON', goals: 73.1, logo: 'palmeiras.png' }
];

// Função para renderizar gráfico de porcentagem de defesas
function renderPorcentagemDefesas(data) {
  const container = document.getElementById('porcentagemDefesas');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(player => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (player.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${player.logo}" alt="${player.name}" class="img-jogador" />
        <p class="nome-jogador">${player.name}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${player.goals.toFixed(1)}%</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderPorcentagemDefesas(porcentagemDefesas);

// Dados dos goleiros - Média de defesas por jogo
const mediaDefesas = [
  { name: 'GABRIEL', goals: 4.1, logo: 'sport.png' },
  { name: 'WALTER', goals: 3.6, logo: 'mirassol.png' },
  { name: 'Lucas ARCANJO', goals: 3.6, logo: 'vitoria.png' },
  { name: 'Gabriel BRAZÃO', goals: 3.4, logo: 'santos.png' },
  { name: 'Cleiton SCHWENGBER', goals: 3.3, logo: 'bragantino.png' }
];

// Função para renderizar gráfico de média de defesas por jogo
function renderMediaDefesas(data) {
  const container = document.getElementById('mediaDefesas');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(player => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (player.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${player.logo}" alt="${player.name}" class="img-jogador" />
        <p class="nome-jogador">${player.name}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${player.goals.toFixed(1)}</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderMediaDefesas(mediaDefesas);


////////// Estatísticas de Times //////////


// Dados dos times
const topTeams = [
  { name: 'Flamengo', goals: 78, logo: 'flamengo.png' },
  { name: 'Palmeiras', goals: 66, logo: 'palmeiras.png' },
  { name: 'Mirassol', goals: 63, logo: 'mirassol.png' },
  { name: 'Botafogo', goals: 58, logo: 'botafogo.png' },
  { name: 'Cruzeiro', goals: 55, logo: 'cruzeiro.png' }
];

const bottomTeams = [
  { name: 'Sport', goals: 28, logo: 'sport.png' },
  { name: 'Ceará', goals: 34, logo: 'ceara.png' },
  { name: 'Vitória', goals: 35, logo: 'vitoria.png' },
  { name: 'Juventude', goals: 35, logo: 'juventude.png' },
  { name: 'Corinthians', goals: 42, logo: 'corinthians.png' }
];

// Função para renderizar gráfico
function renderChart(data, type) {
  const container = document.getElementById('graficoGols');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(team => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (team.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${team.logo}" alt="${team.name}" class="img-jogador" />
        <p class="nome-jogador">${team.name.toUpperCase()}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${team.goals}</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderChart(topTeams, 'top');

// Dados dos times - Gols sofridos
const golsSofridos = [
  { name: 'Sport Recife', goals: 75, logo: 'sport.png' },
  { name: 'Juventude', goals: 69, logo: 'juventude.png' },
  { name: 'Vasco da Gama', goals: 60, logo: 'vasco.png' },
  { name: 'Fortaleza', goals: 58, logo: 'fortaleza.png' },
  { name: 'Internacional', goals: 57, logo: 'internacional.png' }
];

// Função para renderizar gráfico
function renderGolsSofridos(data) {
  const container = document.getElementById('graficoGolsSofridos');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(team => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (team.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${team.logo}" alt="${team.name}" class="img-jogador" />
        <p class="nome-jogador">${team.name.toUpperCase()}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${team.goals}</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderGolsSofridos(golsSofridos);

// Dados dos times - Cartões amarelos
const cartoesAmarelos = [
  { name: 'Red Bull Bragantino', goals: 109, logo: 'bragantino.png' },
  { name: 'Vitória', goals: 107, logo: 'vitoria.png' },
  { name: 'Fortaleza', goals: 105, logo: 'fortaleza.png' },
  { name: 'Corinthians', goals: 104, logo: 'corinthians.png' },
  { name: 'Juventude', goals: 103, logo: 'juventude.png' }
];

// Função para renderizar gráfico
function renderCartoesAmarelos(data) {
  const container = document.getElementById('graficoCartoesAmarelos');
  container.innerHTML = '';

  const maxGoals = Math.max(...data.map(t => t.goals));

  data.forEach(team => {
    const bar = document.createElement('div');
    bar.className = 'barra flex';
    bar.style.width = (team.goals / maxGoals * 100) + '%';

    bar.innerHTML = `
      <div class="jogador flex">
        <img src="assets/${team.logo}" alt="${team.name}" class="img-jogador" />
        <p class="nome-jogador">${team.name.toUpperCase()}</p>
      </div>
      <div class="espaco-numero">
        <div class="numero"><p>${team.goals}</p></div>
      </div>
    `;

    container.appendChild(bar);
  });
}

// Inicialização
renderCartoesAmarelos(cartoesAmarelos);


////////// Avaliações dos jogadores //////////


// Carregar avaliações do localStorage
let ratings = JSON.parse(localStorage.getItem('ratings')) || [];

// Função de renderização
function renderRatings() {
  const container = document.getElementById('avaliacoesContainer');
  container.innerHTML = '';

  // Ordenar da maior para menor nota
  const sorted = [...ratings].sort((a, b) => b.rating - a.rating);

  for (const r of sorted) {
    const card = document.createElement('div');
    card.className = 'card';

    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerHTML = `<span>${r.player}</span><span>Nota: ${r.rating}</span>`;

    card.appendChild(header);
    container.appendChild(card);
  }

  updateResumo();
}

// Função de resumo
function updateResumo() {
  document.getElementById('totalAvaliacoes').textContent = ratings.length;
  if (ratings.length > 0) {
    const media = (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1);
    document.getElementById('mediaNotas').textContent = media;
    document.getElementById('maxNota').textContent = Math.max(...ratings.map(r => r.rating));
  } else {
    document.getElementById('mediaNotas').textContent = '-';
    document.getElementById('maxNota').textContent = '-';
  }
}

// Formulário de adicionar nota
document.getElementById('addRatingForm').addEventListener('submit', e => {
  e.preventDefault();
  const player = document.getElementById('playerSelect').value;
  const rating = parseFloat(document.getElementById('playerRating').value);

  // Verifica se já existe nota para esse jogador
  const existingIndex = ratings.findIndex(r => r.player === player);

  if (existingIndex !== -1) {
    // Se já existe, sobrescreve
    ratings[existingIndex].rating = rating;
  } else {
    // Se não existe, adiciona
    ratings.push({ player, rating });
  }

  // Atualiza localStorage
  localStorage.setItem('ratings', JSON.stringify(ratings));

  // Re-renderiza
  renderRatings();
  e.target.reset();
});

// Função de limpar avaliações
function clearRatings() {
  ratings = []; // zera o array
  localStorage.removeItem('ratings'); // apaga do localStorage
  renderRatings(); // re-renderiza vazio
}

// Se você adicionar um botão no HTML com id="clearBtn", basta conectar:
const clearBtn = document.getElementById('clearBtn');
if (clearBtn) {
  clearBtn.addEventListener('click', clearRatings);
}

// Inicialização
renderRatings();


///////////// Tabela de classificação /////////////


const classificacao = [
  { pos: 1, team: 'FLAMENGO', pj: 38, v: 23, e: 10, d: 5, pts: 79, logo: 'flamengo.png' },
  { pos: 2, team: 'PALMEIRAS', pj: 38, v: 23, e: 7, d: 8, pts: 76, logo: 'palmeiras.png' },
  { pos: 3, team: 'CRUZEIRO', pj: 38, v: 19, e: 13, d: 6, pts: 70, logo: 'cruzeiro.png' },
  { pos: 4, team: 'MIRASSOL', pj: 38, v: 18, e: 13, d: 7, pts: 67, logo: 'mirassol.png' },
  { pos: 5, team: 'FLUMINENSE', pj: 38, v: 19, e: 7, d: 12, pts: 64, logo: 'fluminense.png' },
  { pos: 6, team: 'BOTAFOGO', pj: 38, v: 17, e: 12, d: 9, pts: 63, logo: 'botafogo.png' },
  { pos: 7, team: 'BAHIA', pj: 38, v: 17, e: 9, d: 12, pts: 60, logo: 'bahia.png' },
  { pos: 8, team: 'SÃO PAULO', pj: 38, v: 14, e: 9, d: 15, pts: 51, logo: 'saopaulo.png' },
  { pos: 9, team: 'GRÊMIO', pj: 38, v: 13, e: 10, d: 15, pts: 49, logo: 'gremio.png' },
  { pos: 10, team: 'RED BULL BRAGANTINO', pj: 38, v: 14, e: 6, d: 18, pts: 48, logo: 'bragantino.png' },
  { pos: 11, team: 'ATLÉTICO-MG', pj: 38, v: 12, e: 12, d: 14, pts: 48, logo: 'atleticomg.png' },
  { pos: 12, team: 'SANTOS', pj: 38, v: 12, e: 11, d: 15, pts: 47, logo: 'santos.png' },
  { pos: 13, team: 'CORINTHIANS', pj: 38, v: 12, e: 11, d: 15, pts: 47, logo: 'corinthians.png' },
  { pos: 14, team: 'VASCO DA GAMA', pj: 38, v: 13, e: 6, d: 19, pts: 45, logo: 'vasco.png' },
  { pos: 15, team: 'VITÓRIA', pj: 38, v: 11, e: 12, d: 15, pts: 45, logo: 'vitoria.png' },
  { pos: 16, team: 'INTERNACIONAL', pj: 38, v: 11, e: 11, d: 16, pts: 44, logo: 'internacional.png' },
  { pos: 17, team: 'CEARÁ', pj: 38, v: 11, e: 10, d: 17, pts: 43, logo: 'ceara.png' },
  { pos: 18, team: 'FORTALEZA', pj: 38, v: 11, e: 10, d: 17, pts: 43, logo: 'fortaleza.png' },
  { pos: 19, team: 'JUVENTUDE', pj: 38, v: 9, e: 8, d: 21, pts: 35, logo: 'juventude.png' },
  { pos: 20, team: 'SPORT RECIFE', pj: 38, v: 2, e: 11, d: 25, pts: 17, logo: 'sport.png' }
];

function renderTabela(data) {
  const tabela = document.getElementById('tabela');
  tabela.innerHTML = '';

  // Cabeçalho
  const cabecalho = document.createElement('div');
  cabecalho.className = 'cabecalho flex';
  cabecalho.innerHTML = `
    <div class="celula_tabela" id="cabecalho_posicao"><p>#</p></div>
    <div class="celula_tabela" id="cabecalho_time"><p>Time</p></div>
    <div class="celula_tabela" id="cabecalho_jogos" title="Partidas Jogadas"><p>PJ</p></div>
    <div class="celula_tabela" id="cabecalho_vitorias" title="Vitórias"><p>V</p></div>
    <div class="celula_tabela" id="cabecalho_empates" title="Empates"><p>E</p></div>
    <div class="celula_tabela" id="cabecalho_derrotas" title="Derrotas"><p>D</p></div>
    <div class="celula_tabela" id="cabecalho_pontos" title="Pontos"><p>Pts.</p></div>
  `;
  tabela.appendChild(cabecalho);

  // Linhas
  data.forEach(team => {
    let classe = '';

    if (team.pos <= 5) {
      classe = 'libertadores';
    } else if (team.pos === 6 || team.pos === 7) {
      classe = 'pre-libertadores';
    } else if (team.pos >= 8 && team.pos <= 13) {
      classe = 'sulamericana';
    } else if (team.pos >= 17) {
      classe = 'rebaixado';
    }

    const linha = document.createElement('div');
    linha.className = `coluna_tabela flex ${classe}`;

    linha.innerHTML = `
      <div class="nomes_tabela flex">
        <div class="celula_tabela" id="posicao"><p>${team.pos}</p></div>
        <div class="celula_tabela" id="time">
          <div id="escudo"><img width="28" height="28" src="assets/${team.logo}" alt="${team.team}"></div>
          <div id="nome_time"><p>${team.team}</p></div>
        </div>
      </div>
      <div class="dados_tabela flex">
        <div class="celula_tabela" id="partidas"><p>${team.pj}</p></div>
        <div class="celula_tabela" id="vitorias"><p>${team.v}</p></div>
        <div class="celula_tabela" id="empates"><p>${team.e}</p></div>
        <div class="celula_tabela" id="derrotas"><p>${team.d}</p></div>
        <div class="celula_tabela" id="pontos"><p>${team.pts}</p></div>
      </div>
    `;

    tabela.appendChild(linha);
  });
}

renderTabela(classificacao);
