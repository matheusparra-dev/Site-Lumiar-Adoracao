window.addEventListener("scroll", function() {
    let nav = document.querySelector('.menu')
    nav.classList.toggle('rolagem',window.scrollY > 0)
})

window.addEventListener("scroll", function() {
    let nav = document.querySelector('.menu-mobile')
    nav.classList.toggle('rolagem',window.scrollY > 0)
})

window.addEventListener("scroll", function() {
    let nav = document.querySelector('.scroll')
    nav.classList.toggle('rolagem',window.scrollY > 0)
})
    /* function botaomenu() {
        if (menuretratil.style.display == 'block') {
            menuretratil.style.display = 'none'
        } else {
            menuretratil.style.display = 'block'
        }
    } */

    
    function sebotaomenu() {
        const elemento = document.getElementById("icone-menu");
        const conteudo = elemento.innerText;
        if (conteudo === 'menu') {
            recolher();
            xbotaomenu();
        } else {
            recolher();
            mbotaomenu();
        }
    }

/* TUDO DAQUI PRA BAIXO ESTA FUNCIONANDO */
    function xbotaomenu() {
        const elemento = document.getElementById("icone-menu");
        elemento.innerHTML = 'close';
    }

    function mbotaomenu() {
        const elemento = document.getElementById("icone-menu");
        elemento.innerHTML = 'menu';
    }

    function recolher() {
        if (menuretratil.style.display == 'block') {
            menuretratil.style.display = 'none'
        } else {
            menuretratil.style.display = 'block'
        }
    }