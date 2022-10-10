const navigation = document.querySelector(".navigation-ul");
const open = document.querySelector(".burger-btn--open");
const close = document.querySelector(".burger-btn--close");
const burger = document.querySelector(".burger-button").addEventListener("click", () => {
  if (navigation.style.display === "none") {
    navigation.style.display = "flex";
    open.style.display='none';
    close.style.display='block'
  } else {
    navigation.style.display = "none";
    open.style.display='block';
    close.style.display='none'
  }
});


const resetMenu=()=>{
    if(window.innerWidth>=650){
        navigation.style.display="flex";
        open.style.display='none'
    }else if(window.innerWidth<650){
        navigation.style.display="none";
        open.style.display='block'
        close.style.display='none'
    }
  }
  window.addEventListener("resize",resetMenu);