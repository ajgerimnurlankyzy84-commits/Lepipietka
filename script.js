const button = document.getElementById("myButton");
const button2 = document.getElementById("menuu")
const pages = document.querySelectorAll('.page');
const DURATION = 350;
 
function goToPage(targetId) {
      const current = document.querySelector('.page.visible');
      const next = document.getElementById(targetId);
 
      if (!next || next === current) return;

      current.classList.remove('fadein');
 
      setTimeout(() => {
        current.classList.remove('visible');
        next.classList.add('visible');
        requestAnimationFrame(() => {
          next.classList.add('fadein');
        });
      }, DURATION);
    }


button.addEventListener("click", () =>{
    goToPage('catalogue');
});

button2.addEventListener("click", () =>{
    goToPage('home');
});