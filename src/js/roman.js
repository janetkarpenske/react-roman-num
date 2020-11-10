let romanCalc = (number) => {

  let mCount = 0;
  let dCount = 0;
  let cCount = 0;
  let lCount = 0;
  let xCount = 0;
  let vCount = 0;
  let iCount = 0;
  let output = "";  

  let m = (number) => {
    if (number - 1000 >= 0) {
      if (mCount >= 3) {        
        output = "ERROR"
        return;
      } else {
      mCount +=1;
      output += "M";
      m(number-1000);
      }
    } else {
      return d(number);
    }
  }
  
  let d = (number) => {    
    if (number >= 900) {
      output += "CM";
      return x(number);
    }    
    if (number - 500 >= 0) {  
      if (dCount >= 3) {
        number -= 500;
        mCount += 1;
        dCount -= 2;
        output = output.slice(0,-2);
        output += "M"
        return v(number);
      } else {    
        dCount +=1;
        output += "D";
        d(number-500);        
        }
    } else {
      return c(number);
    }    
  }

  let c = (number) => {
    if (number - 100 >= 0) {
      if (cCount >= 3) {
        number -= 100;
        dCount += 1;
        cCount -= 2;
        output = output.slice(0,-2);
        output += "D"
        return l(number);
      } else {
        cCount +=1;
        output += "C";
        c(number-100);
      } 
    }
    else {      
      return l(number);
    }
  }

  let l = (number) => { 
    if (number >= 90) {
      output += "XC";
      return v(number);
    }
    
    if (number - 50 >= 0) {
      if (lCount >= 3) {
        number -= 50;
        cCount += 1;
        lCount -= 2;
        output = output.slice(0,-2);
        output += "C"
        return v(number);
      } else {
        lCount +=1;
        output += "L";
        l(number-50);
      }
    } else {          
      return x(number);
    }
  }

  let x = (number) => {
    if (number >= 90) {
      output += "XC";
      return v(number);
    }
    if (number - 10 >= 0) {
      if (xCount >= 3) {
        number -= 10;
        lCount += 1;
        xCount -= 2;
        output = output.slice(0,-2);
        output += "L"
        return v(number);
      } else {
        xCount +=1;
        output += "X";        
        x(number-10);
      }      
    } else {
      return v(number);
    }
  }

  let v = (number) => {   
    if (number === 9) {
      output += "IX"
      return;
    }
    if (number - 5 >= 0) {      
      if (vCount >= 3) {
        number -= 5;
        xCount += 1;
        vCount -= 2;
        output = output.slice(0,-2);
        output += "X"
        return i(number);      
      } else {
        vCount +=1;        
        output += "V";
        v(number-5);
      }    
   } else {      
      return i(number);
    }  
  }

  let i = (number) => {
    if (number - 1 >= 0) {
      if (iCount >= 3) {
        number -= 1;
        vCount += 1;
        iCount -= 2;        
        output = output.slice(0,-2);        
        output += "V";
        return;
      } else {
        output += "I";
        iCount +=1;
        i(number-1);
      }
    } else {      
     return;
    }
  }

  m(number);  
  return output;
}
console.log(romanCalc(4000));