const containerP = document.getElementsByClassName('p')[0];
const containerR = document.getElementsByClassName('r')[0];
const containeOp = document.getElementsByClassName('opcao')[0];
const containerEnv = document.getElementsByClassName('enviar')[0];
const containerInp = document.getElementsByClassName('ipnRadio');
const quizz = document.getElementsByClassName('quizz')[0];

const perguntas = [
  'Como a umidade e o calor constantes da Amazônia influenciam a vegetação e o clima global? ',
  'Quais são as possíveis consequências do aumento gradual das temperaturas na Amazônia? ',
  'De que maneira a degradação da Amazônia pode afetar sua capacidade de absorver? ',
  'Quais são algumas das principais medidas recomendadas para conservar o? ',
];
const respostas = [
  ['Alt1', 'Alt1a', 'alt1C', 'alt1d'],
  ['Alt2', 'Alt2a', 'alt2C', 'alt2d'],
  ['Alt3', 'Alt3a', 'alt3C', 'alt3d'],
  ['Alt4', 'Alt4a', 'alt4C', 'alt4d'],
];

function createIpn() {
  let txt = document.createElement('p');

  for (c = 1; c <= 4; c += 1) {
    let ipnRadio = document.createElement('input');
    ipnRadio.setAttribute('type', 'radio');
    ipnRadio.setAttribute('name', 'ipnRadio');
    ipnRadio.setAttribute('class', 'ipnRadio');
    containerR.append(ipnRadio);
  }
}
createIpn(perguntas);

// GERANDO PERGUNTAS

function createP(req, pos) {
  containerP.innerHTML = req[pos];
  console.log(`Pergunta ${pos + 1} criada com sucesso`);
}

var c = 0;

createP(perguntas, 0);

// GERANDO ALTERNATIVAS

function gerarAlternativas(posX, posY) {
  respostas[posX].map((el, i) => {
    const elementos = [];
    switch (0) {
      case 0: {
        elementos[0] = el;
      }
      case 1: {
        elementos[1] = el;
      }
      case 2: {
        elementos[2] = el;
      }
      case 3: {
        elementos[3] = el;
      }
    }

    const section = document.createElement('section');
    section.setAttribute('class', 'option');
    section.innerText = elementos[posX];
    const sections = [...document.getElementsByClassName('option')];
    sections.map((el, i) => {
      containeOp.removeChild(el);
    });
    setTimeout(() => {
      containeOp.appendChild(section);
    }, 200);
  });
}

gerarAlternativas(c);

// REMOVENDO ALTERNATIVAS JÁ MOSTRADAS

// VALIDANDO RESPOSTA SELECIONADA

function verificar(q) {
  const inputs = [
    containerInp[0],
    containerInp[1],
    containerInp[2],
    containerInp[3],
  ];
  let result;
  inputs.map((el, i, a) => {
    if (el.checked == true) {
      if (q == 0) {
        if (i == 0) {
          result = true;
        }
      } else if (q == 1) {
        if (i == 2) {
          result = true;
        }
      } else if (q == 2) {
        if (i == 3) {
          // este número é a posição em que a resposat está
          result = true;
        }
      } else if (q == 3) {
        if (i == 3) {
          result = true;
        }
      } else if (q == 4) {
        if (i == 4) {
          result = true;
        }
      } else {
        result = false;
      }
    }
  });
  return result;
}

// CRIANDO PERGUNTAS ,VALIDANDO RESPOSTAS,REMOVENDO E GERANDO NOVAS ALTERNATIVAS

containerEnv.addEventListener('click', () => {
  if (verificar(c) == true) {
    if (c > perguntas.length) {
      containerP.innerHTML = 'FIM';
    }
    console.log('Resposta correta');
    c++;
    createP(perguntas, parseInt(c));
    gerarAlternativas(c);
  }
});
