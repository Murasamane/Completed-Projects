const item=document.querySelectorAll(".nav-links");
document.addEventListener("click",e=>{
    let currentItem;
    currentItem=e.target.closest(".nav-links");
    item.forEach(items=>{
if(items===currentItem){
    items.classList.toggle("active");
}else{
    items.classList.remove("active");
}

})

})



const burgerMenu=document.querySelector(".burger-menu-btn");
const navigation=document.querySelector(".head-flex");

burgerMenu.addEventListener("click",()=>{

    if (navigation.style.display === "flex") {
        navigation.style.display = "none";
        burgerMenu.classList.remove("close");
      } else {
        navigation.style.display = "flex";
        burgerMenu.classList.add("close");
      }
})


const resetMenu=()=>{
    if(window.innerWidth>=730){
        navigation.style.display="flex";
        burgerMenu.classList.add("close");
    }else if(window.innerWidth<730){
        navigation.style.display="none";
        burgerMenu.classList.remove("close");
    }
  }
  window.addEventListener("resize",resetMenu);

























