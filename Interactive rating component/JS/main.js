// grab the parent form which contains submit and ratings
// grab unordered list so we can attach the rating click event on it so we wont have to create event within another event
// WHICH IS BAD PRACTIce
// grab rating nodeList
// grab the entire card div for template string
// create global score variable to store the value of selected rating so that it can be used in new template card
const card=document.querySelector(".rate-system")
const rate=document.querySelectorAll(".list-items");
const form=document.querySelector(".form-rate")
const ul=document.querySelector(".rates")
let score;

// create unordered event which lets you choose only one rating to submit

ul.addEventListener("click",e=>{

    // create variable which documents the class list of target element

   const elementClass=e.target.classList;

//    first if checks if non target elements class list contains class active
//    and remove them buy going in class list array with forEach


    if(!elementClass.contains("active")){
        rate.forEach(items=>{
            items.classList.remove("active");
        })
    }

    //second if check stops event from bubbling up
    // and adding class active to only one target elements class list
    // by checking if said target element contains class list-items 
    // if they dont it doesnt add class active to the class list 
    // which stops the propogation without it event starts to bubble up to unordered list and form itself


        if(elementClass.contains("list-items")){
        elementClass.add("active")
        }
        
        
      //store active class value into the score variable

      score=document.querySelector(".active").value;

       
})

    //create submit event with template string , when the user submits the template of rating board will change into
    // thank you board with the selected rating


        form.addEventListener("submit",e=>{
            e.preventDefault();
            card.innerHTML=`
        <div class="img-div">
        <img src="img/illustration-thank-you.svg" alt="">
        </div>
        <div class="selected-rating">
           <p class="score-p-tag">You selected ${score} out of 5</p> 
        </div>
        <div class="thank-you-summary">
            <h1>Thank You!</h1>
            <p>We appreciate you taking the time to give a rating.
                if you need more support. don't hesitate to get in touch!
            </p>
        </div>`
})




