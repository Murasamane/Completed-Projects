const ball=document.querySelector(".ball");
const basic=document.querySelector(".basic");
const pro=document.querySelector(".professional");
const master=document.querySelector(".master")

ball.addEventListener("click",e=>{
    if(!ball.classList.contains("slide-right") || ball.classList.contains("slide-left")){
        ball.classList.remove("slide-left");
        ball.classList.add("slide-right");
        basic.innerHTML=`<span class="price">&dollar;</span>19.99`;
        pro.innerHTML=`<span class="price">&dollar;</span>24.99`;
        master.innerHTML=`<span class="price">&dollar;</span>39.99`;
    }else{
        ball.classList.remove("slide-right");
        ball.classList.add("slide-left")
        basic.innerHTML=`<span class="price">&dollar;</span>199.99`;
        pro.innerHTML=`<span class="price">&dollar;</span>249.99`;
        master.innerHTML=`<span class="price">&dollar;</span>399.99`;
    }

})
