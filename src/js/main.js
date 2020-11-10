

let coinCalculator2 = (amount) => {
  let quartersCount = 0;
  let dimesCount = 0;
  let nicklesCount = 0;
  let penniesCount = 0;  
  
  let quarters = (amount) => {        
    if (amount - .25 >= 0) {
      quartersCount += 1;
      quarters((amount-.25).toFixed(2))      
    } else {      
      return dimes(amount);
    }
  }

  let dimes = (amount) => {       
    if (amount - .10 >= 0) {
      dimesCount += 1;
      dimes((amount-.10).toFixed(2))      
    } else {      
      return nickles(amount);
    }
  }

  let nickles= (amount) => {       
    if (amount - .05 >= 0) {
      nicklesCount += 1;
      nickles((amount-.05).toFixed(2))      
    } else {      
      return pennies(amount);
    }
  }

  let pennies= (amount) => {        
    if (amount - .01 >= 0) {
      penniesCount += 1;
      pennies((amount-.01).toFixed(2))      
    } else {         
      return "done";
    }
  }
  quarters(amount);    
  return `Qx${quartersCount} Dx${dimesCount} Nx${nicklesCount} Px${penniesCount}`;
}

console.log(coinCalculator2(11.89));