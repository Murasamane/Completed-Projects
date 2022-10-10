const menu=document.querySelector(".burger-menu");
const nav=document.querySelector(".main-nav-ul");

menu.addEventListener("click",()=>{

    if (nav.style.display === "flex") {
        nav.style.display = "none";
        burgerMenu.classList.remove("open");
      } else {
        nav.style.display = "flex";
        burgerMenu.classList.add("open");
      }
})


const resetMenu=()=>{
    if(window.innerWidth>=730){
        nav.style.display="flex";
        menu.classList.add("open");
    }else if(window.innerWidth<730){
        nav.style.display="none";
        menu.classList.remove("open");
    }
  }

  window.addEventListener("resize",resetMenu);