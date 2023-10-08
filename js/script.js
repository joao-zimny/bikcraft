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
    if(elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);