const hamburguer = document.querySelector('.ham')
const menu = document.querySelector('.menu-nav')



hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle('spread')
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle('spread')
    }
})