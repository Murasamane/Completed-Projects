const burgerMenu=document.querySelector(".burger-menu");
let mainNav=document.querySelector(".main-nav");

burgerMenu.addEventListener("click",()=>{
    if (mainNav.style.display === "block") {
        mainNav.style.display = "none";
      } else {
        mainNav.style.display = "block";
      }
})


const resetMenu=()=>{
  if(window.innerWidth>=600){
    mainNav.style.display="block";
  }else if(window.innerWidth<600){
    mainNav.style.display="none";
  }
}
window.addEventListener("resize",resetMenu);
