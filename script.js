
let btnShowMenu = document.getElementById('toogle');
btnShowMenu.addEventListener('click', (e)=>{
  showMenuMobile()
});

function showMenuMobile(){
  let sectionMenuMobile = document.querySelector('#container-mobile')
  if(sectionMenuMobile.classList.contains('open')){
    sectionMenuMobile.classList.remove('open')
    btnShowMenu.innerHTML =`<i class="fa fa-close"></i>`
  }else{
    sectionMenuMobile.classList.add('open');
    btnShowMenu.innerHTML =`<i class="fa fa-navicon"></i>`
  }
}

function clickMenu(){
  if(showMenuMobile().value)
    sectionMenuMobile.remove()
}


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