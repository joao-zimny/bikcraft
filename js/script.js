// Ativar links do Menu
const links = document.querySelectorAll('.header-menu a');
function ativarLink(link) {
    const url = location.href; // URL da página atual 
    const href = link.href; // href do link

    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}
links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}
parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas)

// Galeria de bikes

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches; // maior que 1000px? true - false
    // Se for > 1000px não vai executar
    console.log(media);
    if (media) {
        galeriaContainer.prepend(img);
    }
}
function eventosGaleria(event) {
    event.addEventListener('click', trocarImagem);
}
galeria.forEach(eventosGaleria);

// Solução com arrowFunction
// imagem.forEach((event) => {
//     event.addEventListener('click', (e) => {
//         const img = e.currentTarget;
//         galeriaContainer.prepend(img);
//     });
// })

// Animação 
if (window.SimpleAnime) {
    new SimpleAnime();
}