function openMenu(){
    document.getElementById('menuRight').style.right = ('0');
    document.getElementById('btnMenu').style.right = ('13.5rem');
}

function closeMenu(){
    document.getElementById('menuRight').style.right = ('-10.1rem');
    document.getElementById('btnMenu').style.right = ('3.5rem');
}

const menuClick = document.getElementById('menuRight');
menuClick.addEventListener('click', openMenu);

// PRECISO ENTENDER COMO ISSO AQUI ABAIXO FUNCIONOU DEPOIS KKKKKKKKKKKKK 

document.addEventListener('click', function(event){
    const corpoClick = document.getElementById('menuRight');
    const isOpenMenu = corpoClick.contains(event.target);
    if (!isOpenMenu) {
        closeMenu();
    }
})

//case para confirmar se o usuário está online, ausente, jogando ou conectado(a).

function perfilMode(){
    const perfilActivityArray = document.querySelectorAll('.perfil-activity');
    perfilActivityArray.forEach(cadaActivity => {
        const status = cadaActivity.textContent;

        if (status === 'disponível' || status === 'conectado (a)') {
            cadaActivity.classList.add('conectado')
        } if (status === 'ausente'){
            cadaActivity.classList.add('ausente')
        } if (status === 'em jogo' || status === 'competitivo'){
            cadaActivity.classList.add('em-jogo')
        }
    })
}










 