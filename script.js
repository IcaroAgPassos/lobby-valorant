function openMenu(){
    document.getElementById('menuRight').style.right = ('0');
    document.getElementById('btnMenu').style.right = ('13.5rem');
}

function closeMenu(){
    document.getElementById('menuRight').style.right = ('-9.8rem');
    document.getElementById('btnMenu').style.right = ('3.5rem');
}

const menuClick = document.getElementById('menuRight');
menuClick.addEventListener('click', openMenu);

document.addEventListener('click', function(event){
    const corpoClick = document.getElementById('menuRight');
    const isOpenMenu = corpoClick.contains(event.target);
    if (!isOpenMenu) {
        closeMenu();
    }
})








 