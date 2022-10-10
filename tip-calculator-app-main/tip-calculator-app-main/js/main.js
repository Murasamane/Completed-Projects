const selectTip = document.querySelector(".select-tip");
const tipAmmounts = document.querySelectorAll(".tips");
const numberOfPeople = document.querySelector(".num-people");
const enteredBill = document.querySelector(".bill");
const inputs = document.querySelector(".inputs");

selectTip.addEventListener("click", (e) => {
  const currentEl = e.target.classList;
  if (!currentEl.contains("active")) {
    tipAmmounts.forEach((items) => {
      items.classList.remove("active");
    });
    if (currentEl.contains("tips")) {
      currentEl.add("active");
    }
  }
});

numberOfPeople.addEventListener("keyup", (e) => {
  let chosenTipPer;
  if(document.querySelector('.active') !== null){
     chosenTipPer = Number(document.querySelector(".active").textContent.replaceAll("%", "")) / 100;
  }else if(document.querySelector('.custom') !== null){
     chosenTipPer = Number(document.querySelector('.custom').value)/100;
  }else{
    chosenTipPer = 0;
  }
  if (e.keyCode === 13) {
      const tipPerPerson = (((1 + chosenTipPer) * enteredBill.value - enteredBill.value)/numberOfPeople.value).toFixed(2);
      const totalPerPerson = (((1 + chosenTipPer) * enteredBill.value) / numberOfPeople.value).toFixed(2);

      document.querySelector(".ammount-nums").textContent = tipPerPerson;
      document.querySelector(".totals-num").textContent =totalPerPerson;
      document.querySelector('.regex-span').style.display = 'none';
      numberOfPeople.style.outlineColor = 'rgb(38 192 171)';

      if(tipPerPerson >= Infinity || totalPerPerson >= Infinity || enteredBill.value <= 0 || numberOfPeople.value === 0){
        document.querySelector(".ammount-nums").textContent = (0.00).toFixed(2);
        document.querySelector(".totals-num").textContent = (0.00).toFixed(2);
        document.querySelector('.regex-span').style.display = 'block';
        numberOfPeople.style.outlineColor = 'orangered';
      }

  }


  
});

document.querySelector(".reset-btn").addEventListener("click", () => {
  window.location.reload();
});
