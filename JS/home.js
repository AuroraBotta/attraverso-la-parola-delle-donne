document.querySelectorAll('nav ul li.autrici > a, nav ul li.opere > a').forEach(a=>{
  a.addEventListener('click', function(e){
    if(window.innerWidth <= 768){ 
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('active');
    }
  });
});

let slideIndex=0;
const slides=document.querySelectorAll('.slides');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
function showSlide(n){ slides.forEach(s=>s.style.display='none'); slides[n].style.display='block'; }
function nextSlide(){ slideIndex=(slideIndex+1)%slides.length; showSlide(slideIndex);}
function prevSlide(){ slideIndex=(slideIndex-1+slides.length)%slides.length; showSlide(slideIndex);}
prev.addEventListener('click',prevSlide);
next.addEventListener('click',nextSlide);
showSlide(slideIndex);
setInterval(nextSlide,5000);