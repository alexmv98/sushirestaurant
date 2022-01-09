const iconoMenu = document.querySelector('#icono-menu'),
     menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    
    //alternamos estilos para el menu y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    //alternamos su atributo src para el icono del menu
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == '/images/menu.png'){
        e.target.setAttribute('src','/images/open-menu2.png');
    }else{
        e.target.setAttribute('src','/images/menu.png')
    }
})

 // Look for .hamburger
 var hamburger = document.querySelector(".hamburger");
 // On click
 hamburger.addEventListener("click", function() {
   // Toggle class "is-active"
   hamburger.classList.toggle("is-active");
   // Do something else, like open/close menu
 });