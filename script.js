//Função para abrir o menu mobile//
function showMenuMobile(){
  let btnMenu = document.querySelector('#toogle');
  let menu = document.querySelector('#nav');
  if(menu.classList.contains('open')){
    menu.classList.remove('open');
    btnMenu.innerHTML=`<span class="material-symbols-outlined">menu</span>`
  }else{
    menu.classList.add('open')
    btnMenu.innerHTML=`<span class="material-symbols-outlined">close</span>`
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


document.addEventListener('DOMContentLoaded', function() {
  const transitionText = document.querySelector('.about-event');
  const text = "Que bom ter você por aqui";
  const interval = 100;

  function showText(el, text, interval) {
      const char = text.split("").reverse();
      const typer = setInterval(() => {
          if (!char.length) {
              return clearInterval(typer);
          }
          const next = char.pop();
          el.innerHTML += next;
      }, interval);
  }
  showText(transitionText, text, interval);
});



