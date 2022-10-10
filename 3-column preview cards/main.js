function FirstFactorial(num) { 
    // code goes here  
    let fact = 1;
    for (i = 1; i <= num; i++) {
       let answer= fact*=i;
        if(i==num){
            console.log(answer)
            return fact *= i; 
        }
    }
  }
     
  // keep this function call here 
FirstFactorial(4)
