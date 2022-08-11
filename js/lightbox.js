const imagenes = document.querySelectorAll('.img-gallery')
const imagenLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.ham')

imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        apareceImg(imagen.getAttribute('src'))
    })
}); 

contenedorLight.addEventListener('click', (e)=>{
    if(e.target != imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage') 
        hamburguer1.style.opacity = '1'
      
    }
})

const apareceImg = (imagen)=>{
    imagenLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}