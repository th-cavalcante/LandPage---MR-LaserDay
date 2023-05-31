//Função para abrir o menu mobile//
function showMenuMobile(){
  let btnMenu = document.querySelector('#toogle');
  let menu = document.querySelector('#nav');
  if(menu.classList.contains('open')){
    menu.classList.remove('open');
    btnMenu.innerHTML=`<i class="fa fa-navicon"></i>`
  }else{
    menu.classList.add('open')
    btnMenu.innerHTML=`<i class="fa fa-close"></i>`
  }
};

//função para fechar o menu, quando um nav foi clicado//
function clickRemoveMenu(){
  if(showMenuMobile().value){
    showMenuMobile.remove()   
  }
};


//slide de fotos
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Tempo de 3 segundos
}

