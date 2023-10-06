const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href; // URL da página atual 
    const href = link.href; // href do link

    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);
